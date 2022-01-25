import { Request } from 'express';
import { Controller, Get, Post, Put, Delete, Patch, Req } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
@ApiTags('API Study')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: '[STUDY] GET_제목(요약)',
    description:
      'ApiOperation부분에서 출력되는 중(ApiOperation_Description Part)',
  })
  @ApiParam({ name: 'id', description: 'ApiParam부분에서 출력되는 중(ApiParam_Description Part)' })
  @ApiResponse({ description: 'ApiResponse부분에서 출력되는 중(ApiResponse_Description Part)', type: null })
  @ApiBody({ description: 'ApiBody부분에서 출력되는 중(ApiBody_Description Part)', type: AppController})
  @Get()
  getHello(@Req() req: Request): string {
    console.log(req)
    return this.appService.getHello();
  }

  @ApiOperation({
    summary: '[STUDY] POST_제목(요약)',
    description:
      'ApiOperation부분에서 출력되는 중(ApiOperation_Description Part)',
  })
  @ApiParam({ name: 'id', description: 'ApiParam부분에서 출력되는 중(ApiParam_Description Part)' })
  @ApiResponse({ description: 'ApiResponse부분에서 출력되는 중(ApiResponse_Description Part)', type: null })
  @ApiBody({ description: 'ApiBody부분에서 출력되는 중(ApiBody_Description Part)', type: AppController})
  @Post('/a*')
  getHello2(): string {
    return this.appService.getHello2();
  }

  @ApiOperation({
    summary: '[STUDY] PUT_제목(요약)',
    description:
      'ApiOperation부분에서 출력되는 중(ApiOperation_Description Part)',
  })
  @ApiParam({ name: 'id', description: 'ApiParam부분에서 출력되는 중(ApiParam_Description Part)' })
  @ApiResponse({ description: 'ApiResponse부분에서 출력되는 중(ApiResponse_Description Part)', type: null })
  @ApiBody({ description: 'ApiBody부분에서 출력되는 중(ApiBody_Description Part)', type: AppController})
  @Put('/b*')
  getHello3(): string {
    return this.appService.getHello3();
  }

  @ApiOperation({
    summary: '[STUDY] DELETE_제목(요약)',
    description:
      'ApiOperation부분에서 출력되는 중(ApiOperation_Description Part)',
  })
  @ApiParam({ name: 'id', description: 'ApiParam부분에서 출력되는 중(ApiParam_Description Part)' })
  @ApiResponse({ description: 'ApiResponse부분에서 출력되는 중(ApiResponse_Description Part)', type: null })
  @ApiBody({ description: 'ApiBody부분에서 출력되는 중(ApiBody_Description Part)', type: AppController})
  @Delete('/c*')
  getHello4(): string {
    return this.appService.getHello4();
  }

  @ApiOperation({
    summary: '[STUDY] PATCH_제목(요약)',
    description:
      'ApiOperation부분에서 출력되는 중(ApiOperation_Description Part)',
  })
  @ApiParam({ name: 'id', description: 'ApiParam부분에서 출력되는 중(ApiParam_Description Part)' })
  @ApiResponse({ description: 'ApiResponse부분에서 출력되는 중(ApiResponse_Description Part)', type: null })
  @ApiBody({ description: 'ApiBody부분에서 출력되는 중(ApiBody_Description Part)', type: AppController})
  @Patch('/d*')
  getHello5(): string {
    return this.appService.getHello5();
  }
}
