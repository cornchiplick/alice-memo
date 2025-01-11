export const URL = {
  HOME: "/home",
  MEMO: "/memo",
  GOAL: "/goal",
  FLOW: "/flow",
  CALENDAR: "/calendar",
  ARCHIVE: "/archive",
};

export const Constants = {
  ALICE_MEMO_ITEM: "ALICE_MEMO_ITEM",
  ALICE_MEMO_ALL: "ALICE_MEMO_ALL",
};

export const Authentication = {
  PASSWORD_MIN_LENGTH: 4,
  // 소문자, 대문자, 숫자, 특수문자가 각각 최소 하나 이상 포함된 비밀번호를 요구함.
  PASSWORD_REGEX: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/),
  PASSWORD_REGEX_ERROR:
    "A password must have lowercase, UPPERCASE, a numnber and special characters",
};
