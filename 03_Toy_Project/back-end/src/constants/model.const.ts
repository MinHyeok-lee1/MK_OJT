import { FindParameters } from '../models/base.entity';

/***************************************************
 * Base 모델 참조 상수
 ***************************************************/
export const genFindParamQuery = (data: FindParameters) => {
  let query = '';
  if (data?.page) query = query + '?page=' + data.page;
  else query = query + '?page=1';
  if (data?.take) query = query + '&take=' + data.take;
  if (data?.filterKey && data?.filterValue) {
    query =
      query +
      '&filterKey=' +
      data.filterKey +
      '&filterValue=' +
      data.filterValue;
    if (data.useRegSearch == true) {
      query = query + '&useRegSearch=' + data.useRegSearch;
    }
  }
  return query;
};

// 페이지당 출력될 문서의 수의 기봅값
export const defTakeNum: number = 30;
// 페이지장 출력될 문서의 최소 수
export const minTakeNum: number = 1;
// 페이지장 출력될 문서의 최대 수
export const maxTakeNum: number = 100;

/***************************************************
 * Company 모델 참조 상수
 ***************************************************/
export enum CompanyApproval {
  BEFORE = 'before', // 심사 전. 회원가입 후 서류 제출 완료 전
  ING = 'ing', // 심사 중. 회원가입 및 서류 제출 완료
  DONE = 'done', // 승인완료
}

/***************************************************
 * User 모델 참조 상수
 ***************************************************/
export enum UserAuthority {
  ADMIN = 'admin', // MK의 시스템 관리자
  OWNER = 'owner', // 카센터
  WORKER = 'worker', // 카센터 직원
}

/***************************************************
 * Maintenance 모델 참조 상수
 ***************************************************/

// 정비 상태
export enum MaintenanceStatus {
  RESERVED = 'reserved', // 예약됨
  STORED = 'stored', // 정비시작 전
  ING = 'ing', // 정비중
  DONE = 'done', // 정비완료
  RELEASED = 'released', // 출고완료
  CANCELED = 'canceled', // 최소
}

/**
 * 정비상태에 따른 한글 상태값 반환
 * @param status MaintenanceStatus 값
 * @returns 한글 상태값
 */
export const getStrMaintenanceStatus = (status: MaintenanceStatus): string => {
  switch (status) {
    case MaintenanceStatus.RESERVED:
      return '예약';
    case MaintenanceStatus.STORED:
      return '입고';
    case MaintenanceStatus.ING:
      return '정비중';
    case MaintenanceStatus.DONE:
      return '정비완료';
    case MaintenanceStatus.RELEASED:
      return '출고';
    case MaintenanceStatus.CANCELED:
      return '취소';
    default:
      return null;
  }
};

export enum MaintenanceCustomerType {
  NORMAL = 'normal',
  CORPORATION = 'corporation',
}

export const getStrMaintenanceCustomerType = (
  type: MaintenanceCustomerType,
): string => {
  switch (type) {
    case MaintenanceCustomerType.NORMAL:
      return '일반';
    case MaintenanceCustomerType.CORPORATION:
      return '법인';
    default:
      return null;
  }
};

export enum MaintenancePartsType {
  A = 'a',
  B = 'b',
  C = 'c',
  F = 'f',
}

export const getStrMaintenancePartsType = (
  type: MaintenancePartsType,
): string => {
  switch (type) {
    case MaintenancePartsType.A:
      return '정품';
    case MaintenancePartsType.B:
      return '호환품';
    case MaintenancePartsType.C:
      return '중고';
    case MaintenancePartsType.F:
      return '재생';
    default:
      return null;
  }
};
