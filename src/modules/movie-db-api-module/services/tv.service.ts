import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CommonService } from '../../common-module/common.service';
import { firstValueFrom } from 'rxjs';
import { TVSearchDto } from '../../common-module/dto/tv-search.dto';
import { TVSearchResponseDto } from '../../search-module/dto/tv-search-response.dto';

@Injectable()
export class TVService {
  constructor(
    private httpService: HttpService,
    private _commonService: CommonService,
  ) {}

  async getTVList(params: TVSearchDto): Promise<TVSearchResponseDto> {
    const finalParams = this._commonService.cleanObject(params);
    const response = await firstValueFrom(
      this.httpService.get(`https://api.themoviedb.org/3/discover/tv`, {
        params: finalParams,
        headers: this._commonService.headersForRequest(),
      }),
    );

    const tvObj: TVSearchResponseDto = response.data;

    return await this._commonService.transformAndValidateObj(
      TVSearchResponseDto,
      tvObj,
    );
  }
}
