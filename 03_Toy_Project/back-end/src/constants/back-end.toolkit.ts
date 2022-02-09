import { TransformFnParams } from 'class-transformer';
import { isNumber } from 'class-validator';
import { defTakeNum, maxTakeNum } from './model.const';
import 'dayjs/locale/ko';
import { BadRequestException } from '@nestjs/common';


/***************************************************
 * Base 모델 참조 상수
 ***************************************************/
// 페이지번호 검증
export function getValidPageNumber(params: TransformFnParams) {
  // console.log('getValidPageNumber');
  // console.log('input: ' + params.value);

  params.value = parseInt(params.value);

  if (!isNumber(params.value)) {
    params.value = 1;
  }
  if (params.value <= 0) {
    params.value = 1;
  }
  return params.value;
}

// 페이지당 출력 문서 수 검증
export function getValidTakeNumber(params: TransformFnParams) {
  // console.log('getValidTakeNumber');
  // console.log('input: ' + params.value);

  params.value = parseInt(params.value);

  if (!isNumber(params.value)) {
    params.value = defTakeNum;
  }

  if (params.value <= 0) {
    params.value = defTakeNum;
  } else if (params.value > maxTakeNum) {
    params.value = maxTakeNum;
  }

  return params.value;
}

export function strToBoolean(params: TransformFnParams) {
  if (params.value == 'true' || params.value == true) {
    params.value = true;
  } else {
    params.value = false;
  }

  return params.value;
}

export function removePropertyWithEmptyValue(params: TransformFnParams) {
  // console.log('removePropertyWithEmptyValue');
  // console.log('value: ' + params.value);

  // 빈값 null 처리
  if (
    params.value == '' ||
    params.value == undefined ||
    params.value == 'undefined'
  ) {
    return null;
  }
  return params.value;
}

