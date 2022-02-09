import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { MongooseModule, Prop } from '@nestjs/mongoose';
import { defTakeNum, maxTakeNum, minTakeNum } from 'src/constants/model.const';

/**
 * DB의 스키마로 사용할 모든 데이터 모델 클래스에 상속되는 기본 클래스
 */
export class BaseEntity extends MongooseModule {
  /**
   * 데이터 모델 개발법
   * 단일 클래스를 Schema, CreateDto, UpdateDto용으로 혼용하는 것을 목적으로 함
   * - CreateDto: 데이터 생성시 사용
   *              - 데이터 생성에 필요한 항목들은 @isString 등의 데코레이터가 주입됨
   * - UpdateDto: 데이터 패치시 사용. CreateDto의 전체 혹은 일부 항목들을 허용해야 함(PartialType)
   *              - 항목 생략을 허용하기 위해 모든 항목들은 @isOptional 데코레이터가 주입됨
   * - Schema: @prop 데코레이터를 통해 스키마 옵션 설정
   *              - 설정 된 옵션을 데이터 생성(추가)시 적용되는 옵션을 의미함
   *
   * 데코레이터 주입 방법
   * 하단의 4종의 데코레이터를 용도에 맞게 사용
   * @ApiProperty(): Swagger를 통한 API 문서 생성용 주석 주입에 사용
   * @IsOptional(): 데이터 패치시 생략되어도 class-validator에 의해 exception이 발생되지 않도록 주입
   *                - 데이터 포스트시 필수 항목은 prop의 required 항목에서 설정
   *                - 사실상 모든 필드에 본 옵션을 주입해야 함
   * @IsEmail(): class-validator의 데이터 타입 검증을 위해 주입(해당하는 타입으로 주입)
   * @prop(): 스키마 옵션으로 사용
   */

  @ApiProperty({ description: '오브젝트 ID (자동 생성)', required: false })
  public _id: string;

  @ApiProperty({ description: '데이터 생성 시점 (자동 생성)', required: false })
  @Prop()
  public createdAt: Date;

  @ApiProperty({ description: '데이터 갱신 시점 (자동 갱신)', required: false })
  @Prop()
  public updatedAt: Date;

  @ApiProperty({ description: '데이서 소유 업체 (자동 주입)', required: false })
  @Prop()
  public _cID: string;

  @ApiProperty({
    description: '데이터 작성자의 오브젝트 ID (자동 주입)',
    required: false,
  })
  @Prop()
  public _uID: string;

  /**  버전값 (조회되진 않음) */
  @Prop({ type: Number, select: false }) // 버전값은 조회되지 않도록 할 때
  // @prop()
  __v?: number;
}


export class FindResult<T> {
  @ApiProperty({ description: '검색 결과' })
  docs: T[];

  @ApiProperty({ description: '검색 조건에 해당하는 전체 데이터의 수' })
  totalDocs: number;

  @ApiProperty({ description: '현재 페이지' })
  currentPage: number;

  @ApiProperty({ description: '마지막 페이지' })
  lastPage: number;
}

export class DeleteObjectIds {
  @ApiProperty({ description: '삭제할 데이터들의 오브젝트 ID들' })
  @IsArray()
  ids: string[];
}

export class DeleteResult {
  @ApiProperty({ description: '삭제된 데이터의 수' })
  deletedCount: number;
}

export class DbErrorInfo {
  name: string;
  code: string | number;
  key?: string;
}

// 부가정보. Post나 Patch시 전달할 정보
export class OptionalInfo {
  @ApiProperty({ description: '부가정보1' })
  @IsOptional()
  @IsString()
  public info1?: string | null;

  @ApiProperty({ description: '부가정보2' })
  @IsOptional()
  @IsString()
  public info2?: string | null;

  @ApiProperty({ description: '부가정보3' })
  @IsOptional()
  @IsString()
  public info3?: string | null;
}
function prop() {
  throw new Error('Function not implemented.');
}

