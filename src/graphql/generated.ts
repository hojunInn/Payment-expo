import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Input type for dynamic zone option of IdeaBox */
  IdeaBoxOptionDynamicZoneInput: any;
  /** Input type for dynamic zone action of Interaction */
  InteractionActionDynamicZoneInput: any;
  /** Input type for dynamic zone option of Poll */
  PollOptionDynamicZoneInput: any;
  /** Input type for dynamic zone content of Post */
  PostContentDynamicZoneInput: any;
  /** Input type for dynamic zone option of Qna */
  QnaOptionDynamicZoneInput: any;
  /** Input type for dynamic zone content of Question */
  QuestionContentDynamicZoneInput: any;
  /** Input type for dynamic zone option of Quiz */
  QuizOptionDynamicZoneInput: any;
  /** Input type for dynamic zone answers of Quiz */
  QuizAnswersDynamicZoneInput: any;
  /** Input type for dynamic zone option of Survey */
  SurveyOptionDynamicZoneInput: any;
  /** Input type for dynamic zone answer of ComponentPostAnswerList */
  ComponentPostAnswerListAnswerDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type SurveyQuestionInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['SurveyOptionDynamicZoneInput']>;
  questions?: Maybe<Array<Maybe<QuestionInput>>>;
  workspace?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
};

export type QuizQuestionInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isTemplate?: Maybe<Scalars['Boolean']>;
  tier?: Maybe<Array<Maybe<ComponentActivityTierInput>>>;
  answers?: Maybe<Array<Maybe<Scalars['QuizAnswersDynamicZoneInput']>>>;
  option: Array<Maybe<Scalars['QuizOptionDynamicZoneInput']>>;
  questions?: Maybe<Array<Maybe<QuestionInput>>>;
  workspace?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
};

export type PollQuestionInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['PollOptionDynamicZoneInput']>;
  question?: Maybe<QuestionInput>;
};

export type QnaOptionInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['QnaOptionDynamicZoneInput']>;
  responders?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IdeaBoxOptionInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['IdeaBoxOptionDynamicZoneInput']>;
};

export type CreateDeforaActInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  effectiveDate?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  rewardOption?: Maybe<Enum_Activity_Rewardoption>;
  rewardAllocationAmount?: Maybe<Scalars['Float']>;
  rewardPaidAmount?: Maybe<Scalars['Float']>;
  type?: Maybe<Enum_Activity_Type>;
  status?: Maybe<Enum_Activity_Status>;
  isShowResultAfterDeadline?: Maybe<Scalars['Boolean']>;
  idea_box?: Maybe<IdeaBoxOptionInput>;
  qna?: Maybe<QnaOptionInput>;
  poll?: Maybe<PollQuestionInput>;
  survey?: Maybe<SurveyQuestionInput>;
  quiz?: Maybe<QuizQuestionInput>;
  group?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  creator?: Maybe<Scalars['ID']>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CreateDeforaActivityInput = {
  data?: Maybe<CreateDeforaActInput>;
  activityId?: Maybe<Scalars['ID']>;
};

export type JoinActivityInput = {
  activityId: Scalars['ID'];
  workspaceMemberId?: Maybe<Scalars['ID']>;
  groupMemberId?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type SummarizeResponseData = {
  __typename?: 'SummarizeResponseData';
  question?: Maybe<Question>;
  response?: Maybe<Scalars['JSON']>;
};

export type SummarizeResponse = {
  __typename?: 'SummarizeResponse';
  data: Array<SummarizeResponseData>;
  rank?: Maybe<Scalars['JSON']>;
};

export type JoinActivityPayload = {
  __typename?: 'JoinActivityPayload';
  activity?: Maybe<Activity>;
  memberRole?: Maybe<MemberRole>;
};

export type DeleteEventInput = {
  activityIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type DeleteEventPayload = {
  __typename?: 'deleteEventPayload';
  activityList?: Maybe<Array<Maybe<Activity>>>;
};

export type SendPayloadInput = {
  targetId: Scalars['String'];
  payload: Scalars['JSON'];
};

export type CreateDeforaGroupInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  groupType: Enum_Group_Grouptype;
  workspace?: Maybe<Scalars['ID']>;
  workspaceMemberId: Scalars['ID'];
  interactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  attachment?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  memberAttachment?: Maybe<Scalars['ID']>;
  boardIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UpdateDeforaGroupInput = {
  where: InputId;
  data?: Maybe<EditDeforaGroupInput>;
};

export type JoinDeforaGroupInput = {
  groupId: Scalars['ID'];
  workspaceMemberId: Scalars['ID'];
  username: Scalars['String'];
  workspace?: Maybe<Scalars['ID']>;
  invitationCode: Scalars['Int'];
  memberAttachment?: Maybe<Scalars['ID']>;
};

export type GroupAndMemberPayload = {
  __typename?: 'groupAndMemberPayload';
  group: Group;
  member: Member;
};

export type MemberRoleInfoResponse = {
  __typename?: 'memberRoleInfoResponse';
  memberRole: MemberRole;
  groupList?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EditDeforaGroupInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
  boardIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UpdateStatusInput = {
  interactionID?: Maybe<Array<Maybe<Scalars['ID']>>>;
  settingStatus?: Maybe<Enum_Group_Status>;
  resolverName?: Maybe<Scalars['String']>;
  resolveReason?: Maybe<Scalars['String']>;
};

export type SortedReportsInput = {
  workspaceID?: Maybe<Scalars['ID']>;
};

export type ReportDataType = {
  __typename?: 'ReportDataType';
  id: Scalars['String'];
  reportId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  contentCreated?: Maybe<Scalars['DateTime']>;
  numberOfMember?: Maybe<Scalars['Int']>;
  numberOfReport?: Maybe<Scalars['Int']>;
  reportedDate?: Maybe<Scalars['DateTime']>;
  reportedReason?: Maybe<Scalars['String']>;
  reporterName?: Maybe<Scalars['String']>;
  resolverName?: Maybe<Scalars['String']>;
  resolvedResult?: Maybe<Scalars['String']>;
  resolvedReason?: Maybe<Scalars['String']>;
  resolvedDate?: Maybe<Scalars['DateTime']>;
};

export type SubDataType = {
  __typename?: 'SubDataType';
  id: Scalars['ID'];
  data: Array<Maybe<ReportDataType>>;
};

export type UpdateStatusPayload = {
  __typename?: 'updateStatusPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type SortedReportsPayload = {
  __typename?: 'sortedReportsPayload';
  resolvedData?: Maybe<Array<Maybe<ReportDataType>>>;
  unResolvedData?: Maybe<Array<Maybe<ReportDataType>>>;
  resolvedSubData?: Maybe<Array<Maybe<SubDataType>>>;
  unResolvedSubData?: Maybe<Array<Maybe<SubDataType>>>;
};

export type SendInvitationEmailInput = {
  invitationId?: Maybe<Scalars['String']>;
};

export type SendInvitationEmailPayload = {
  __typename?: 'sendInvitationEmailPayload';
  data: Array<SummarizeResponseData>;
  rank?: Maybe<Scalars['JSON']>;
};

export type InvitationCodeInfoResponse = {
  __typename?: 'invitationCodeInfoResponse';
  isValid: Scalars['Boolean'];
  invitationId?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  workspaceName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type VerifySmsInput = {
  invitationCode: Scalars['String'];
  phone: Scalars['String'];
};

export type InviteMemberInput = {
  emailList?: Maybe<Array<Scalars['String']>>;
  workspaceId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type AdminInvitedInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  invitationCode: Scalars['String'];
  workspaceKey?: Maybe<Scalars['String']>;
};

export type AdminInvitedPayload = {
  __typename?: 'adminInvitedPayload';
  valid: Scalars['Boolean'];
  member?: Maybe<Member>;
  workspace?: Maybe<Workspace>;
};

export type StartQrcodeCommInput = {
  finalHash?: Maybe<Scalars['String']>;
  pubKey?: Maybe<Scalars['String']>;
};

export type StartQrcodeCommPayload = {
  __typename?: 'startQrcodeCommPayload';
  id?: Maybe<Scalars['ID']>;
  peer?: Maybe<Scalars['String']>;
};

export type MessageQrcodeCommInput = {
  peer?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type MessageQrcodeCommPayload = {
  __typename?: 'messageQrcodeCommPayload';
  qrcodeComm?: Maybe<QrcodeComm>;
};

export type BackupRecoveryInput = {
  encryptedData?: Maybe<Scalars['String']>;
  backupAt?: Maybe<Scalars['DateTime']>;
};

export type BackupRecoveryPayload = {
  __typename?: 'backupRecoveryPayload';
  recovery?: Maybe<Recovery>;
};

export type Product = {
  __typename?: 'Product';
  productId?: Maybe<Scalars['String']>;
  brandTitle?: Maybe<Scalars['String']>;
  productTitle?: Maybe<Scalars['String']>;
  productImg1?: Maybe<Scalars['String']>;
  productImg2?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  priceOrg?: Maybe<Scalars['Int']>;
  productSaleType?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  caution?: Maybe<Scalars['String']>;
  useArea?: Maybe<Scalars['String']>;
  bonusProductIds?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  popular?: Maybe<Scalars['String']>;
  recent?: Maybe<Scalars['String']>;
};

export type Brand = {
  __typename?: 'Brand';
  brandId?: Maybe<Scalars['String']>;
  brandTitle?: Maybe<Scalars['String']>;
  categoryTitle?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  brandImg1?: Maybe<Scalars['String']>;
  brandImg2?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  categoryId?: Maybe<Scalars['String']>;
  categoryTitle?: Maybe<Scalars['String']>;
  categoryTitleEng?: Maybe<Scalars['String']>;
};

export type PurchaseInfo = {
  __typename?: 'PurchaseInfo';
  userId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  orId?: Maybe<Scalars['String']>;
  trId?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  cpId?: Maybe<Scalars['String']>;
  cpPartnerId?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  brandTitle?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  productType?: Maybe<Scalars['String']>;
  productSaletype?: Maybe<Scalars['String']>;
  productTitle?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  pinNumber?: Maybe<Scalars['String']>;
  pinindexnumber?: Maybe<Scalars['String']>;
  pinstatus?: Maybe<Scalars['String']>;
  expdate?: Maybe<Scalars['String']>;
  mmsstatus?: Maybe<Scalars['Int']>;
  mmscnt?: Maybe<Scalars['Int']>;
  mmscompletedate?: Maybe<Scalars['String']>;
  recdate?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  caution?: Maybe<Scalars['String']>;
  useArea?: Maybe<Scalars['String']>;
  exptext?: Maybe<Scalars['String']>;
  productImg1?: Maybe<Scalars['String']>;
  productImg2?: Maybe<Scalars['String']>;
  priceOrg?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProductListResponse = {
  __typename?: 'ProductListResponse';
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type ProductInfo = {
  __typename?: 'ProductInfo';
  productId?: Maybe<Scalars['String']>;
  brandTitle?: Maybe<Scalars['String']>;
  productTitle?: Maybe<Scalars['String']>;
  productImg1?: Maybe<Scalars['String']>;
  productImg2?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  priceOrg?: Maybe<Scalars['Int']>;
  productSaleType?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  caution?: Maybe<Scalars['String']>;
  useArea?: Maybe<Scalars['String']>;
  bonusProductIds?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  policyExpextend?: Maybe<Scalars['String']>;
  policyRefund?: Maybe<Scalars['String']>;
};

export type UserPoints = {
  __typename?: 'UserPoints';
  points?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type PurchaseCouponPayload = {
  __typename?: 'PurchaseCouponPayload';
  pointsBefore?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  pinNumber?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type RefundCouponPayload = {
  __typename?: 'RefundCouponPayload';
  estimateOnly?: Maybe<Scalars['Boolean']>;
  refundPercent?: Maybe<Scalars['Int']>;
  expdate?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  pointsWillbe?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type PaymentResponsePayload = {
  __typename?: 'paymentResponsePayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type PurchaseCouponInput = {
  productId: Scalars['String'];
  buyerId: Scalars['String'];
  buyerMobile?: Maybe<Scalars['String']>;
  receiverId?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
};

export type PaymentInput = {
  imp_uid?: Maybe<Scalars['String']>;
  merchant_uid?: Maybe<Scalars['String']>;
  customer_uid?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['Int']>;
  numOfMember?: Maybe<Scalars['Int']>;
};

export type InitPaymentInput = {
  user_name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type InitPaymentPayload = {
  __typename?: 'initPaymentPayload';
  merchant_uid?: Maybe<Scalars['String']>;
};

export type JoinWorkspaceWithCodeInput = {
  invitationCode: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  workspaceKey?: Maybe<Scalars['String']>;
};

export type CreateWorkspaceFirstInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  workspaceName: Scalars['String'];
  linkpath?: Maybe<Scalars['String']>;
};

export type JoinWorkSpaceResult = {
  __typename?: 'joinWorkSpaceResult';
  valid: Scalars['Boolean'];
  workspace?: Maybe<Workspace>;
  member?: Maybe<Member>;
};

export type AdminAsMemberInput = {
  phone: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  workspaceId: Scalars['String'];
};

export type UpdateWorkspaceKeyInput = {
  workspaceId: Scalars['String'];
  workspaceKey: Scalars['String'];
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export enum Enum_Activity_Type {
  Survey = 'SURVEY',
  Poll = 'POLL',
  Quiz = 'QUIZ',
  Qna = 'QNA',
  Ideabox = 'IDEABOX',
  Board = 'BOARD'
}

export enum Enum_Activity_Rewardoption {
  Winner = 'WINNER',
  Earlybird = 'EARLYBIRD',
  Level = 'LEVEL',
  All = 'ALL',
  Limit = 'LIMIT'
}

export enum Enum_Activity_Status {
  Open = 'OPEN',
  Closed = 'CLOSED',
  Blocked = 'BLOCKED',
  Deleted = 'DELETED',
  DeleteByReport = 'DELETE_BY_REPORT',
  KeepByReport = 'KEEP_BY_REPORT'
}

/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type Activity = {
  __typename?: 'Activity';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type?: Maybe<Enum_Activity_Type>;
  description?: Maybe<Scalars['String']>;
  isAnonymous: Scalars['Boolean'];
  effectiveDate?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  rewardOption?: Maybe<Enum_Activity_Rewardoption>;
  rewardAllocationAmount: Scalars['Float'];
  rewardPaidAmount?: Maybe<Scalars['Float']>;
  status?: Maybe<Enum_Activity_Status>;
  isShowResultAfterDeadline?: Maybe<Scalars['Boolean']>;
  survey?: Maybe<Survey>;
  group?: Maybe<Group>;
  poll?: Maybe<Poll>;
  quiz?: Maybe<Quiz>;
  workspace?: Maybe<Workspace>;
  creator?: Maybe<Member>;
  idea_box?: Maybe<IdeaBox>;
  qna?: Maybe<Qna>;
  board?: Maybe<Board>;
  posts?: Maybe<Array<Maybe<Post>>>;
  interactions?: Maybe<Array<Maybe<Interaction>>>;
  roles?: Maybe<Array<Maybe<MemberRole>>>;
  attachment?: Maybe<Array<Maybe<UploadFile>>>;
};


/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type ActivityPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type ActivityInteractionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type ActivityRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


/** 그룹 안에 만들어지는 다양한 액티비티. 설문, 퀴즈, 폴, Q&A, 아이디어박스 등 기한이 정해진 활동이나 게시판처럼 기한이 정해져 있지 않고 게시물을 올릴 수 있는 공간에 해당. */
export type ActivityAttachmentArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  values?: Maybe<Array<Maybe<Activity>>>;
  groupBy?: Maybe<ActivityGroupBy>;
  aggregate?: Maybe<ActivityAggregator>;
};

export type ActivityAggregator = {
  __typename?: 'ActivityAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ActivityAggregatorSum>;
  avg?: Maybe<ActivityAggregatorAvg>;
  min?: Maybe<ActivityAggregatorMin>;
  max?: Maybe<ActivityAggregatorMax>;
};

export type ActivityAggregatorSum = {
  __typename?: 'ActivityAggregatorSum';
  rewardAllocationAmount?: Maybe<Scalars['Float']>;
  rewardPaidAmount?: Maybe<Scalars['Float']>;
};

export type ActivityAggregatorAvg = {
  __typename?: 'ActivityAggregatorAvg';
  rewardAllocationAmount?: Maybe<Scalars['Float']>;
  rewardPaidAmount?: Maybe<Scalars['Float']>;
};

export type ActivityAggregatorMin = {
  __typename?: 'ActivityAggregatorMin';
  rewardAllocationAmount?: Maybe<Scalars['Float']>;
  rewardPaidAmount?: Maybe<Scalars['Float']>;
};

export type ActivityAggregatorMax = {
  __typename?: 'ActivityAggregatorMax';
  rewardAllocationAmount?: Maybe<Scalars['Float']>;
  rewardPaidAmount?: Maybe<Scalars['Float']>;
};

export type ActivityGroupBy = {
  __typename?: 'ActivityGroupBy';
  id?: Maybe<Array<Maybe<ActivityConnectionId>>>;
  _id?: Maybe<Array<Maybe<ActivityConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ActivityConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ActivityConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ActivityConnectionName>>>;
  type?: Maybe<Array<Maybe<ActivityConnectionType>>>;
  description?: Maybe<Array<Maybe<ActivityConnectionDescription>>>;
  isAnonymous?: Maybe<Array<Maybe<ActivityConnectionIsAnonymous>>>;
  effectiveDate?: Maybe<Array<Maybe<ActivityConnectionEffectiveDate>>>;
  deadline?: Maybe<Array<Maybe<ActivityConnectionDeadline>>>;
  rewardOption?: Maybe<Array<Maybe<ActivityConnectionRewardOption>>>;
  rewardAllocationAmount?: Maybe<Array<Maybe<ActivityConnectionRewardAllocationAmount>>>;
  rewardPaidAmount?: Maybe<Array<Maybe<ActivityConnectionRewardPaidAmount>>>;
  status?: Maybe<Array<Maybe<ActivityConnectionStatus>>>;
  isShowResultAfterDeadline?: Maybe<Array<Maybe<ActivityConnectionIsShowResultAfterDeadline>>>;
  survey?: Maybe<Array<Maybe<ActivityConnectionSurvey>>>;
  group?: Maybe<Array<Maybe<ActivityConnectionGroup>>>;
  poll?: Maybe<Array<Maybe<ActivityConnectionPoll>>>;
  quiz?: Maybe<Array<Maybe<ActivityConnectionQuiz>>>;
  workspace?: Maybe<Array<Maybe<ActivityConnectionWorkspace>>>;
  creator?: Maybe<Array<Maybe<ActivityConnectionCreator>>>;
  idea_box?: Maybe<Array<Maybe<ActivityConnectionIdea_Box>>>;
  qna?: Maybe<Array<Maybe<ActivityConnectionQna>>>;
  board?: Maybe<Array<Maybe<ActivityConnectionBoard>>>;
};

export type ActivityConnectionId = {
  __typename?: 'ActivityConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnection_Id = {
  __typename?: 'ActivityConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionCreatedAt = {
  __typename?: 'ActivityConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionUpdatedAt = {
  __typename?: 'ActivityConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionName = {
  __typename?: 'ActivityConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionType = {
  __typename?: 'ActivityConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionDescription = {
  __typename?: 'ActivityConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionIsAnonymous = {
  __typename?: 'ActivityConnectionIsAnonymous';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionEffectiveDate = {
  __typename?: 'ActivityConnectionEffectiveDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionDeadline = {
  __typename?: 'ActivityConnectionDeadline';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionRewardOption = {
  __typename?: 'ActivityConnectionRewardOption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionRewardAllocationAmount = {
  __typename?: 'ActivityConnectionRewardAllocationAmount';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionRewardPaidAmount = {
  __typename?: 'ActivityConnectionRewardPaidAmount';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionStatus = {
  __typename?: 'ActivityConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionIsShowResultAfterDeadline = {
  __typename?: 'ActivityConnectionIsShowResultAfterDeadline';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionSurvey = {
  __typename?: 'ActivityConnectionSurvey';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionGroup = {
  __typename?: 'ActivityConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionPoll = {
  __typename?: 'ActivityConnectionPoll';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionQuiz = {
  __typename?: 'ActivityConnectionQuiz';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionWorkspace = {
  __typename?: 'ActivityConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionCreator = {
  __typename?: 'ActivityConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionIdea_Box = {
  __typename?: 'ActivityConnectionIdea_box';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionQna = {
  __typename?: 'ActivityConnectionQna';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityConnectionBoard = {
  __typename?: 'ActivityConnectionBoard';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ActivityConnection>;
};

export type ActivityInput = {
  name: Scalars['String'];
  type?: Maybe<Enum_Activity_Type>;
  description?: Maybe<Scalars['String']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  effectiveDate?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  rewardOption?: Maybe<Enum_Activity_Rewardoption>;
  rewardAllocationAmount?: Maybe<Scalars['Float']>;
  rewardPaidAmount?: Maybe<Scalars['Float']>;
  status?: Maybe<Enum_Activity_Status>;
  isShowResultAfterDeadline?: Maybe<Scalars['Boolean']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  interactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  survey?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  poll?: Maybe<Scalars['ID']>;
  quiz?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
  idea_box?: Maybe<Scalars['ID']>;
  qna?: Maybe<Scalars['ID']>;
  board?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditActivityInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Activity_Type>;
  description?: Maybe<Scalars['String']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  effectiveDate?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  rewardOption?: Maybe<Enum_Activity_Rewardoption>;
  rewardAllocationAmount?: Maybe<Scalars['Float']>;
  rewardPaidAmount?: Maybe<Scalars['Float']>;
  status?: Maybe<Enum_Activity_Status>;
  isShowResultAfterDeadline?: Maybe<Scalars['Boolean']>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  interactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  survey?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  poll?: Maybe<Scalars['ID']>;
  quiz?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
  idea_box?: Maybe<Scalars['ID']>;
  qna?: Maybe<Scalars['ID']>;
  board?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateActivityInput = {
  data?: Maybe<ActivityInput>;
};

export type CreateActivityPayload = {
  __typename?: 'createActivityPayload';
  activity?: Maybe<Activity>;
};

export type UpdateActivityInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditActivityInput>;
};

export type UpdateActivityPayload = {
  __typename?: 'updateActivityPayload';
  activity?: Maybe<Activity>;
};

export type DeleteActivityInput = {
  where?: Maybe<InputId>;
};

export type DeleteActivityPayload = {
  __typename?: 'deleteActivityPayload';
  activity?: Maybe<Activity>;
};

export type Board = {
  __typename?: 'Board';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isTemplate?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  workspace?: Maybe<Workspace>;
  isAnonymous: Scalars['Boolean'];
  creator?: Maybe<Member>;
  activities?: Maybe<Array<Maybe<Activity>>>;
};


export type BoardActivitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type BoardConnection = {
  __typename?: 'BoardConnection';
  values?: Maybe<Array<Maybe<Board>>>;
  groupBy?: Maybe<BoardGroupBy>;
  aggregate?: Maybe<BoardAggregator>;
};

export type BoardAggregator = {
  __typename?: 'BoardAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BoardGroupBy = {
  __typename?: 'BoardGroupBy';
  id?: Maybe<Array<Maybe<BoardConnectionId>>>;
  _id?: Maybe<Array<Maybe<BoardConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<BoardConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<BoardConnectionUpdatedAt>>>;
  isTemplate?: Maybe<Array<Maybe<BoardConnectionIsTemplate>>>;
  name?: Maybe<Array<Maybe<BoardConnectionName>>>;
  description?: Maybe<Array<Maybe<BoardConnectionDescription>>>;
  workspace?: Maybe<Array<Maybe<BoardConnectionWorkspace>>>;
  isAnonymous?: Maybe<Array<Maybe<BoardConnectionIsAnonymous>>>;
  creator?: Maybe<Array<Maybe<BoardConnectionCreator>>>;
};

export type BoardConnectionId = {
  __typename?: 'BoardConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnection_Id = {
  __typename?: 'BoardConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionCreatedAt = {
  __typename?: 'BoardConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionUpdatedAt = {
  __typename?: 'BoardConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionIsTemplate = {
  __typename?: 'BoardConnectionIsTemplate';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionName = {
  __typename?: 'BoardConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionDescription = {
  __typename?: 'BoardConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionWorkspace = {
  __typename?: 'BoardConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionIsAnonymous = {
  __typename?: 'BoardConnectionIsAnonymous';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardConnectionCreator = {
  __typename?: 'BoardConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoardConnection>;
};

export type BoardInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['ID']>;
  isAnonymous: Scalars['Boolean'];
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBoardInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['ID']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateBoardInput = {
  data?: Maybe<BoardInput>;
};

export type CreateBoardPayload = {
  __typename?: 'createBoardPayload';
  board?: Maybe<Board>;
};

export type UpdateBoardInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBoardInput>;
};

export type UpdateBoardPayload = {
  __typename?: 'updateBoardPayload';
  board?: Maybe<Board>;
};

export type DeleteBoardInput = {
  where?: Maybe<InputId>;
};

export type DeleteBoardPayload = {
  __typename?: 'deleteBoardPayload';
  board?: Maybe<Board>;
};

export type Copyright = {
  __typename?: 'Copyright';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  text?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CopyrightInput = {
  text?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCopyrightInput = {
  text?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCopyrightInput = {
  data?: Maybe<EditCopyrightInput>;
};

export type UpdateCopyrightPayload = {
  __typename?: 'updateCopyrightPayload';
  copyright?: Maybe<Copyright>;
};

export type DeleteCopyrightPayload = {
  __typename?: 'deleteCopyrightPayload';
  copyright?: Maybe<Copyright>;
};

export enum Enum_Customer_Subscriptionplan {
  Trial = 'TRIAL',
  Standard = 'STANDARD',
  Basic = 'BASIC',
  Enterprise = 'ENTERPRISE',
  Academic = 'ACADEMIC',
  Partner = 'PARTNER'
}

export enum Enum_Customer_Paymentfrequency {
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY',
  Custom = 'CUSTOM',
  None = 'NONE'
}

export enum Enum_Customer_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Terminated = 'TERMINATED'
}

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  effectiveDate?: Maybe<Scalars['DateTime']>;
  subscriptionPlan?: Maybe<Enum_Customer_Subscriptionplan>;
  paymentFrequency?: Maybe<Enum_Customer_Paymentfrequency>;
  contact?: Maybe<Array<Maybe<ComponentCommonContact>>>;
  status?: Maybe<Enum_Customer_Status>;
  workspaces?: Maybe<Array<Maybe<Workspace>>>;
  referenceDocument?: Maybe<Array<Maybe<UploadFile>>>;
};


export type CustomerWorkspacesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CustomerReferenceDocumentArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  values?: Maybe<Array<Maybe<Customer>>>;
  groupBy?: Maybe<CustomerGroupBy>;
  aggregate?: Maybe<CustomerAggregator>;
};

export type CustomerAggregator = {
  __typename?: 'CustomerAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CustomerGroupBy = {
  __typename?: 'CustomerGroupBy';
  id?: Maybe<Array<Maybe<CustomerConnectionId>>>;
  _id?: Maybe<Array<Maybe<CustomerConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CustomerConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<CustomerConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<CustomerConnectionName>>>;
  effectiveDate?: Maybe<Array<Maybe<CustomerConnectionEffectiveDate>>>;
  subscriptionPlan?: Maybe<Array<Maybe<CustomerConnectionSubscriptionPlan>>>;
  paymentFrequency?: Maybe<Array<Maybe<CustomerConnectionPaymentFrequency>>>;
  status?: Maybe<Array<Maybe<CustomerConnectionStatus>>>;
};

export type CustomerConnectionId = {
  __typename?: 'CustomerConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnection_Id = {
  __typename?: 'CustomerConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnectionCreatedAt = {
  __typename?: 'CustomerConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnectionUpdatedAt = {
  __typename?: 'CustomerConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnectionName = {
  __typename?: 'CustomerConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnectionEffectiveDate = {
  __typename?: 'CustomerConnectionEffectiveDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnectionSubscriptionPlan = {
  __typename?: 'CustomerConnectionSubscriptionPlan';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnectionPaymentFrequency = {
  __typename?: 'CustomerConnectionPaymentFrequency';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerConnectionStatus = {
  __typename?: 'CustomerConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CustomerConnection>;
};

export type CustomerInput = {
  name?: Maybe<Scalars['String']>;
  effectiveDate?: Maybe<Scalars['DateTime']>;
  subscriptionPlan?: Maybe<Enum_Customer_Subscriptionplan>;
  paymentFrequency?: Maybe<Enum_Customer_Paymentfrequency>;
  contact?: Maybe<Array<Maybe<ComponentCommonContactInput>>>;
  workspaces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  referenceDocument?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Customer_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCustomerInput = {
  name?: Maybe<Scalars['String']>;
  effectiveDate?: Maybe<Scalars['DateTime']>;
  subscriptionPlan?: Maybe<Enum_Customer_Subscriptionplan>;
  paymentFrequency?: Maybe<Enum_Customer_Paymentfrequency>;
  contact?: Maybe<Array<Maybe<EditComponentCommonContactInput>>>;
  workspaces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  referenceDocument?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Customer_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCustomerInput = {
  data?: Maybe<CustomerInput>;
};

export type CreateCustomerPayload = {
  __typename?: 'createCustomerPayload';
  customer?: Maybe<Customer>;
};

export type UpdateCustomerInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCustomerInput>;
};

export type UpdateCustomerPayload = {
  __typename?: 'updateCustomerPayload';
  customer?: Maybe<Customer>;
};

export type DeleteCustomerInput = {
  where?: Maybe<InputId>;
};

export type DeleteCustomerPayload = {
  __typename?: 'deleteCustomerPayload';
  customer?: Maybe<Customer>;
};

export enum Enum_Feeds_Type {
  SysAppUpdate = 'SYS_APP_UPDATE',
  SysNotice = 'SYS_NOTICE',
  WsAnnouncement = 'WS_ANNOUNCEMENT',
  WsAdminAccess = 'WS_ADMIN_ACCESS',
  GroupNewActivity = 'GROUP_NEW_ACTIVITY',
  GroupInvitation = 'GROUP_INVITATION',
  GroupAnnouncement = 'GROUP_ANNOUNCEMENT',
  GroupOwnershipTransfer = 'GROUP_OWNERSHIP_TRANSFER',
  GroupReleased = 'GROUP_RELEASED',
  ActivityLike = 'ACTIVITY_LIKE',
  ActivityComment = 'ACTIVITY_COMMENT',
  ActivityPoint = 'ACTIVITY_POINT',
  Activity_24HrDeadline = 'ACTIVITY_24HR_DEADLINE',
  Activity_1HrDeadline = 'ACTIVITY_1HR_DEADLINE',
  ActivityClosed = 'ACTIVITY_CLOSED',
  ActivityReply = 'ACTIVITY_REPLY',
  ActivityCommentLike = 'ACTIVITY_COMMENT_LIKE',
  ActivityMentioned = 'ACTIVITY_MENTIONED',
  IdeaBoxNewProposal = 'IDEA_BOX_NEW_PROPOSAL',
  IdeaBoxProposalLike = 'IDEA_BOX_PROPOSAL_LIKE',
  IdeaBoxProposalComment = 'IDEA_BOX_PROPOSAL_COMMENT',
  QnaAnswer = 'QNA_ANSWER'
}

export type Feeds = {
  __typename?: 'Feeds';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  target: Scalars['String'];
  type: Enum_Feeds_Type;
  content?: Maybe<ComponentFeedCotentContent>;
  navigation?: Maybe<ComponentNavigationNavigation>;
  timestamp?: Maybe<Scalars['String']>;
  isRead?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type FeedsConnection = {
  __typename?: 'FeedsConnection';
  values?: Maybe<Array<Maybe<Feeds>>>;
  groupBy?: Maybe<FeedsGroupBy>;
  aggregate?: Maybe<FeedsAggregator>;
};

export type FeedsAggregator = {
  __typename?: 'FeedsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FeedsGroupBy = {
  __typename?: 'FeedsGroupBy';
  id?: Maybe<Array<Maybe<FeedsConnectionId>>>;
  _id?: Maybe<Array<Maybe<FeedsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<FeedsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<FeedsConnectionUpdatedAt>>>;
  target?: Maybe<Array<Maybe<FeedsConnectionTarget>>>;
  type?: Maybe<Array<Maybe<FeedsConnectionType>>>;
  content?: Maybe<Array<Maybe<FeedsConnectionContent>>>;
  navigation?: Maybe<Array<Maybe<FeedsConnectionNavigation>>>;
  timestamp?: Maybe<Array<Maybe<FeedsConnectionTimestamp>>>;
  isRead?: Maybe<Array<Maybe<FeedsConnectionIsRead>>>;
  published_at?: Maybe<Array<Maybe<FeedsConnectionPublished_At>>>;
};

export type FeedsConnectionId = {
  __typename?: 'FeedsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnection_Id = {
  __typename?: 'FeedsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionCreatedAt = {
  __typename?: 'FeedsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionUpdatedAt = {
  __typename?: 'FeedsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionTarget = {
  __typename?: 'FeedsConnectionTarget';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionType = {
  __typename?: 'FeedsConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionContent = {
  __typename?: 'FeedsConnectionContent';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionNavigation = {
  __typename?: 'FeedsConnectionNavigation';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionTimestamp = {
  __typename?: 'FeedsConnectionTimestamp';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionIsRead = {
  __typename?: 'FeedsConnectionIsRead';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedsConnectionPublished_At = {
  __typename?: 'FeedsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeedsConnection>;
};

export type FeedInput = {
  target: Scalars['String'];
  type: Enum_Feeds_Type;
  content?: Maybe<ComponentFeedCotentContentInput>;
  navigation?: Maybe<ComponentNavigationNavigationInput>;
  timestamp?: Maybe<Scalars['String']>;
  isRead?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFeedInput = {
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Feeds_Type>;
  content?: Maybe<EditComponentFeedCotentContentInput>;
  navigation?: Maybe<EditComponentNavigationNavigationInput>;
  timestamp?: Maybe<Scalars['String']>;
  isRead?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateFeedInput = {
  data?: Maybe<FeedInput>;
};

export type CreateFeedPayload = {
  __typename?: 'createFeedPayload';
  feed?: Maybe<Feeds>;
};

export type UpdateFeedInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditFeedInput>;
};

export type UpdateFeedPayload = {
  __typename?: 'updateFeedPayload';
  feed?: Maybe<Feeds>;
};

export type DeleteFeedInput = {
  where?: Maybe<InputId>;
};

export type DeleteFeedPayload = {
  __typename?: 'deleteFeedPayload';
  feed?: Maybe<Feeds>;
};

export type Follow = {
  __typename?: 'Follow';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  member?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type FollowConnection = {
  __typename?: 'FollowConnection';
  values?: Maybe<Array<Maybe<Follow>>>;
  groupBy?: Maybe<FollowGroupBy>;
  aggregate?: Maybe<FollowAggregator>;
};

export type FollowAggregator = {
  __typename?: 'FollowAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FollowGroupBy = {
  __typename?: 'FollowGroupBy';
  id?: Maybe<Array<Maybe<FollowConnectionId>>>;
  _id?: Maybe<Array<Maybe<FollowConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<FollowConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<FollowConnectionUpdatedAt>>>;
  member?: Maybe<Array<Maybe<FollowConnectionMember>>>;
  target?: Maybe<Array<Maybe<FollowConnectionTarget>>>;
  isActive?: Maybe<Array<Maybe<FollowConnectionIsActive>>>;
  published_at?: Maybe<Array<Maybe<FollowConnectionPublished_At>>>;
};

export type FollowConnectionId = {
  __typename?: 'FollowConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowConnection_Id = {
  __typename?: 'FollowConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowConnectionCreatedAt = {
  __typename?: 'FollowConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowConnectionUpdatedAt = {
  __typename?: 'FollowConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowConnectionMember = {
  __typename?: 'FollowConnectionMember';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowConnectionTarget = {
  __typename?: 'FollowConnectionTarget';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowConnectionIsActive = {
  __typename?: 'FollowConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowConnectionPublished_At = {
  __typename?: 'FollowConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FollowConnection>;
};

export type FollowInput = {
  member?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFollowInput = {
  member?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateFollowInput = {
  data?: Maybe<FollowInput>;
};

export type CreateFollowPayload = {
  __typename?: 'createFollowPayload';
  follow?: Maybe<Follow>;
};

export type UpdateFollowInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditFollowInput>;
};

export type UpdateFollowPayload = {
  __typename?: 'updateFollowPayload';
  follow?: Maybe<Follow>;
};

export type DeleteFollowInput = {
  where?: Maybe<InputId>;
};

export type DeleteFollowPayload = {
  __typename?: 'deleteFollowPayload';
  follow?: Maybe<Follow>;
};

export enum Enum_Group_Grouptype {
  Private = 'PRIVATE',
  Protected = 'PROTECTED',
  Open = 'OPEN'
}

export enum Enum_Group_Status {
  Open = 'OPEN',
  Deleted = 'DELETED',
  DeleteByReport = 'DELETE_BY_REPORT',
  KeepByReport = 'KEEP_BY_REPORT'
}

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  groupType?: Maybe<Enum_Group_Grouptype>;
  workspace?: Maybe<Workspace>;
  creator?: Maybe<Member>;
  attachment?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Group_Status>;
  trail?: Maybe<Trails>;
  isCertified?: Maybe<Scalars['Boolean']>;
  interactions?: Maybe<Array<Maybe<Interaction>>>;
  roles?: Maybe<Array<Maybe<MemberRole>>>;
};


export type GroupInteractionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GroupRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  values?: Maybe<Array<Maybe<Group>>>;
  groupBy?: Maybe<GroupGroupBy>;
  aggregate?: Maybe<GroupAggregator>;
};

export type GroupAggregator = {
  __typename?: 'GroupAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GroupGroupBy = {
  __typename?: 'GroupGroupBy';
  id?: Maybe<Array<Maybe<GroupConnectionId>>>;
  _id?: Maybe<Array<Maybe<GroupConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GroupConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GroupConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<GroupConnectionName>>>;
  groupType?: Maybe<Array<Maybe<GroupConnectionGroupType>>>;
  workspace?: Maybe<Array<Maybe<GroupConnectionWorkspace>>>;
  creator?: Maybe<Array<Maybe<GroupConnectionCreator>>>;
  attachment?: Maybe<Array<Maybe<GroupConnectionAttachment>>>;
  description?: Maybe<Array<Maybe<GroupConnectionDescription>>>;
  status?: Maybe<Array<Maybe<GroupConnectionStatus>>>;
  trail?: Maybe<Array<Maybe<GroupConnectionTrail>>>;
  isCertified?: Maybe<Array<Maybe<GroupConnectionIsCertified>>>;
};

export type GroupConnectionId = {
  __typename?: 'GroupConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnection_Id = {
  __typename?: 'GroupConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionCreatedAt = {
  __typename?: 'GroupConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionUpdatedAt = {
  __typename?: 'GroupConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionName = {
  __typename?: 'GroupConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionGroupType = {
  __typename?: 'GroupConnectionGroupType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionWorkspace = {
  __typename?: 'GroupConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionCreator = {
  __typename?: 'GroupConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionAttachment = {
  __typename?: 'GroupConnectionAttachment';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionDescription = {
  __typename?: 'GroupConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionStatus = {
  __typename?: 'GroupConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionTrail = {
  __typename?: 'GroupConnectionTrail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionIsCertified = {
  __typename?: 'GroupConnectionIsCertified';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupInput = {
  name: Scalars['String'];
  groupType?: Maybe<Enum_Group_Grouptype>;
  workspace?: Maybe<Scalars['ID']>;
  interactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  creator?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  attachment?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Group_Status>;
  trail?: Maybe<Scalars['ID']>;
  isCertified?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGroupInput = {
  name?: Maybe<Scalars['String']>;
  groupType?: Maybe<Enum_Group_Grouptype>;
  workspace?: Maybe<Scalars['ID']>;
  interactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  creator?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  attachment?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Group_Status>;
  trail?: Maybe<Scalars['ID']>;
  isCertified?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateGroupInput = {
  data?: Maybe<GroupInput>;
};

export type CreateGroupPayload = {
  __typename?: 'createGroupPayload';
  group?: Maybe<Group>;
};

export type UpdateGroupInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGroupInput>;
};

export type UpdateGroupPayload = {
  __typename?: 'updateGroupPayload';
  group?: Maybe<Group>;
};

export type DeleteGroupInput = {
  where?: Maybe<InputId>;
};

export type DeleteGroupPayload = {
  __typename?: 'deleteGroupPayload';
  group?: Maybe<Group>;
};

export type History = {
  __typename?: 'History';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  companyEvent?: Maybe<Array<Maybe<ComponentHomepageCompanyEvent>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type HistoryInput = {
  companyEvent?: Maybe<Array<Maybe<ComponentHomepageCompanyEventInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHistoryInput = {
  companyEvent?: Maybe<Array<Maybe<EditComponentHomepageCompanyEventInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHistoryInput = {
  data?: Maybe<EditHistoryInput>;
};

export type UpdateHistoryPayload = {
  __typename?: 'updateHistoryPayload';
  history?: Maybe<History>;
};

export type DeleteHistoryPayload = {
  __typename?: 'deleteHistoryPayload';
  history?: Maybe<History>;
};

export type Home = {
  __typename?: 'Home';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  greeting?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type HomeInput = {
  greeting?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomeInput = {
  greeting?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHomeInput = {
  data?: Maybe<EditHomeInput>;
};

export type UpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<Home>;
};

export type DeleteHomePayload = {
  __typename?: 'deleteHomePayload';
  home?: Maybe<Home>;
};

export type IdeaBoxOptionDynamicZone = ComponentActivityIdeaBoxOption | ComponentActivityTemplateOption;


export type IdeaBox = {
  __typename?: 'IdeaBox';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isTemplate?: Maybe<Scalars['Boolean']>;
  activity?: Maybe<Activity>;
  workspace?: Maybe<Workspace>;
  creator?: Maybe<Member>;
  option: Array<Maybe<IdeaBoxOptionDynamicZone>>;
};

export type IdeaBoxConnection = {
  __typename?: 'IdeaBoxConnection';
  values?: Maybe<Array<Maybe<IdeaBox>>>;
  groupBy?: Maybe<IdeaBoxGroupBy>;
  aggregate?: Maybe<IdeaBoxAggregator>;
};

export type IdeaBoxAggregator = {
  __typename?: 'IdeaBoxAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IdeaBoxGroupBy = {
  __typename?: 'IdeaBoxGroupBy';
  id?: Maybe<Array<Maybe<IdeaBoxConnectionId>>>;
  _id?: Maybe<Array<Maybe<IdeaBoxConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<IdeaBoxConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<IdeaBoxConnectionUpdatedAt>>>;
  isTemplate?: Maybe<Array<Maybe<IdeaBoxConnectionIsTemplate>>>;
  activity?: Maybe<Array<Maybe<IdeaBoxConnectionActivity>>>;
  workspace?: Maybe<Array<Maybe<IdeaBoxConnectionWorkspace>>>;
  creator?: Maybe<Array<Maybe<IdeaBoxConnectionCreator>>>;
};

export type IdeaBoxConnectionId = {
  __typename?: 'IdeaBoxConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxConnection_Id = {
  __typename?: 'IdeaBoxConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxConnectionCreatedAt = {
  __typename?: 'IdeaBoxConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxConnectionUpdatedAt = {
  __typename?: 'IdeaBoxConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxConnectionIsTemplate = {
  __typename?: 'IdeaBoxConnectionIsTemplate';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxConnectionActivity = {
  __typename?: 'IdeaBoxConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxConnectionWorkspace = {
  __typename?: 'IdeaBoxConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxConnectionCreator = {
  __typename?: 'IdeaBoxConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<IdeaBoxConnection>;
};

export type IdeaBoxInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  option: Array<Scalars['IdeaBoxOptionDynamicZoneInput']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditIdeaBoxInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  option: Array<Scalars['IdeaBoxOptionDynamicZoneInput']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateIdeaBoxInput = {
  data?: Maybe<IdeaBoxInput>;
};

export type CreateIdeaBoxPayload = {
  __typename?: 'createIdeaBoxPayload';
  ideaBox?: Maybe<IdeaBox>;
};

export type UpdateIdeaBoxInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditIdeaBoxInput>;
};

export type UpdateIdeaBoxPayload = {
  __typename?: 'updateIdeaBoxPayload';
  ideaBox?: Maybe<IdeaBox>;
};

export type DeleteIdeaBoxInput = {
  where?: Maybe<InputId>;
};

export type DeleteIdeaBoxPayload = {
  __typename?: 'deleteIdeaBoxPayload';
  ideaBox?: Maybe<IdeaBox>;
};

export enum Enum_Interaction_Type {
  LikeGroup = 'LIKE_GROUP',
  LikeActivity = 'LIKE_ACTIVITY',
  LikePost = 'LIKE_POST',
  ReportGroup = 'REPORT_GROUP',
  ReportActivity = 'REPORT_ACTIVITY',
  ReportPost = 'REPORT_POST',
  ReadGroup = 'READ_GROUP',
  ReadActivity = 'READ_ACTIVITY',
  ReadPost = 'READ_POST'
}

export type InteractionActionDynamicZone = ComponentInteractionReport | ComponentInteractionRead | ComponentInteractionLike;


/**
 * 사용자가 특정 게시물이나 그룹, 액티비티, 게시물, 댓글, 답글 등에 대해 좋아요(LIKE), 신고(REPORT), 조회(READ) 등의 반응을 할 때 이를 저장합니다. 멤버에 대한 반응(차단하기, 보이스 양도 등)은 memberInteraction이라는 별도 타입으로 정의함.
 *
 * 이 컬렉션에 대한 쿼리 예시는 다음과 같음
 *
 * ## Query 작성 방법:
 *
 * query {
 *   interactions {
 *     id
 *     created_by {
 *       id
 *     }
 *     type
 *     action {
 *       __typename
 *       ... on ComponentInteractionLike {
 *         type
 *       }
 *       ... on ComponentInteractionRead {
 *         count
 *       }      ... on ComponentInteractionReport {
 *         reason
 *         text
 *       }
 *     }
 *     activity {
 *       id
 *     }
 *     group {
 *       id
 *     }
 *     post {
 *       id
 *     }
 *   }
 * }
 *
 *
 *
 * ## Mutation 작성 방법:
 *
 * mutation {
 *   createInteraction( input:
 *     { data: {
 *      type: REPORT_GROUP,
 *       action: [ {
 *         __typename:"ComponentInteractionReport"
 *         reason: PRIVACY_VIOLATION
 *       } ],
 *       group: 1 }
 *     }
 *   )
 *   {
 *   interaction {
 *     id
 *   }
 * }
 */
export type Interaction = {
  __typename?: 'Interaction';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: Enum_Interaction_Type;
  action: Array<Maybe<InteractionActionDynamicZone>>;
  activity?: Maybe<Activity>;
  group?: Maybe<Group>;
  post?: Maybe<Post>;
  workspace?: Maybe<Workspace>;
  actor?: Maybe<Member>;
};

export type InteractionConnection = {
  __typename?: 'InteractionConnection';
  values?: Maybe<Array<Maybe<Interaction>>>;
  groupBy?: Maybe<InteractionGroupBy>;
  aggregate?: Maybe<InteractionAggregator>;
};

export type InteractionAggregator = {
  __typename?: 'InteractionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type InteractionGroupBy = {
  __typename?: 'InteractionGroupBy';
  id?: Maybe<Array<Maybe<InteractionConnectionId>>>;
  _id?: Maybe<Array<Maybe<InteractionConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<InteractionConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<InteractionConnectionUpdatedAt>>>;
  type?: Maybe<Array<Maybe<InteractionConnectionType>>>;
  activity?: Maybe<Array<Maybe<InteractionConnectionActivity>>>;
  group?: Maybe<Array<Maybe<InteractionConnectionGroup>>>;
  post?: Maybe<Array<Maybe<InteractionConnectionPost>>>;
  workspace?: Maybe<Array<Maybe<InteractionConnectionWorkspace>>>;
  actor?: Maybe<Array<Maybe<InteractionConnectionActor>>>;
};

export type InteractionConnectionId = {
  __typename?: 'InteractionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnection_Id = {
  __typename?: 'InteractionConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionCreatedAt = {
  __typename?: 'InteractionConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionUpdatedAt = {
  __typename?: 'InteractionConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionType = {
  __typename?: 'InteractionConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionActivity = {
  __typename?: 'InteractionConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionGroup = {
  __typename?: 'InteractionConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionPost = {
  __typename?: 'InteractionConnectionPost';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionWorkspace = {
  __typename?: 'InteractionConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionConnectionActor = {
  __typename?: 'InteractionConnectionActor';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InteractionConnection>;
};

export type InteractionInput = {
  type: Enum_Interaction_Type;
  action: Array<Scalars['InteractionActionDynamicZoneInput']>;
  activity?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  actor?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditInteractionInput = {
  type?: Maybe<Enum_Interaction_Type>;
  action: Array<Scalars['InteractionActionDynamicZoneInput']>;
  activity?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  actor?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateInteractionInput = {
  data?: Maybe<InteractionInput>;
};

export type CreateInteractionPayload = {
  __typename?: 'createInteractionPayload';
  interaction?: Maybe<Interaction>;
};

export type UpdateInteractionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditInteractionInput>;
};

export type UpdateInteractionPayload = {
  __typename?: 'updateInteractionPayload';
  interaction?: Maybe<Interaction>;
};

export type DeleteInteractionInput = {
  where?: Maybe<InputId>;
};

export type DeleteInteractionPayload = {
  __typename?: 'deleteInteractionPayload';
  interaction?: Maybe<Interaction>;
};

export enum Enum_Invitation_Scope {
  System = 'SYSTEM',
  Workspace = 'WORKSPACE',
  Group = 'GROUP',
  Activity = 'ACTIVITY'
}

export type Invitation = {
  __typename?: 'Invitation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  scope?: Maybe<Enum_Invitation_Scope>;
  sentDate?: Maybe<Scalars['DateTime']>;
  rsvp?: Maybe<Array<Maybe<ComponentCommonRsvp>>>;
  expiredDate?: Maybe<Scalars['DateTime']>;
};

export type InvitationConnection = {
  __typename?: 'InvitationConnection';
  values?: Maybe<Array<Maybe<Invitation>>>;
  groupBy?: Maybe<InvitationGroupBy>;
  aggregate?: Maybe<InvitationAggregator>;
};

export type InvitationAggregator = {
  __typename?: 'InvitationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type InvitationGroupBy = {
  __typename?: 'InvitationGroupBy';
  id?: Maybe<Array<Maybe<InvitationConnectionId>>>;
  _id?: Maybe<Array<Maybe<InvitationConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<InvitationConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<InvitationConnectionUpdatedAt>>>;
  scope?: Maybe<Array<Maybe<InvitationConnectionScope>>>;
  sentDate?: Maybe<Array<Maybe<InvitationConnectionSentDate>>>;
  expiredDate?: Maybe<Array<Maybe<InvitationConnectionExpiredDate>>>;
};

export type InvitationConnectionId = {
  __typename?: 'InvitationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InvitationConnection>;
};

export type InvitationConnection_Id = {
  __typename?: 'InvitationConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InvitationConnection>;
};

export type InvitationConnectionCreatedAt = {
  __typename?: 'InvitationConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InvitationConnection>;
};

export type InvitationConnectionUpdatedAt = {
  __typename?: 'InvitationConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InvitationConnection>;
};

export type InvitationConnectionScope = {
  __typename?: 'InvitationConnectionScope';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InvitationConnection>;
};

export type InvitationConnectionSentDate = {
  __typename?: 'InvitationConnectionSentDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InvitationConnection>;
};

export type InvitationConnectionExpiredDate = {
  __typename?: 'InvitationConnectionExpiredDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InvitationConnection>;
};

export type InvitationInput = {
  scope?: Maybe<Enum_Invitation_Scope>;
  sentDate?: Maybe<Scalars['DateTime']>;
  workspace?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  activity?: Maybe<Scalars['ID']>;
  rsvp?: Maybe<Array<Maybe<ComponentCommonRsvpInput>>>;
  sender?: Maybe<Scalars['ID']>;
  expiredDate?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditInvitationInput = {
  scope?: Maybe<Enum_Invitation_Scope>;
  sentDate?: Maybe<Scalars['DateTime']>;
  workspace?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  activity?: Maybe<Scalars['ID']>;
  rsvp?: Maybe<Array<Maybe<EditComponentCommonRsvpInput>>>;
  sender?: Maybe<Scalars['ID']>;
  expiredDate?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateInvitationInput = {
  data?: Maybe<InvitationInput>;
};

export type CreateInvitationPayload = {
  __typename?: 'createInvitationPayload';
  invitation?: Maybe<Invitation>;
};

export type UpdateInvitationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditInvitationInput>;
};

export type UpdateInvitationPayload = {
  __typename?: 'updateInvitationPayload';
  invitation?: Maybe<Invitation>;
};

export type DeleteInvitationInput = {
  where?: Maybe<InputId>;
};

export type DeleteInvitationPayload = {
  __typename?: 'deleteInvitationPayload';
  invitation?: Maybe<Invitation>;
};

export enum Enum_Memberinteraction_Type {
  Mute = 'MUTE',
  Voice = 'VOICE'
}

/** 멤버 사이의 상호작용 즉, 어느 멤버가 다른 멤버에게 보이스 양도 또는 특정 멤버의 게시물 차단에 대한 내역 */
export type MemberInteraction = {
  __typename?: 'MemberInteraction';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: Enum_Memberinteraction_Type;
  quantity?: Maybe<Scalars['Int']>;
  receiver?: Maybe<Member>;
  activity?: Maybe<Activity>;
  workspace?: Maybe<Workspace>;
  actor?: Maybe<Member>;
};

export type MemberInteractionConnection = {
  __typename?: 'MemberInteractionConnection';
  values?: Maybe<Array<Maybe<MemberInteraction>>>;
  groupBy?: Maybe<MemberInteractionGroupBy>;
  aggregate?: Maybe<MemberInteractionAggregator>;
};

export type MemberInteractionAggregator = {
  __typename?: 'MemberInteractionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MemberInteractionAggregatorSum>;
  avg?: Maybe<MemberInteractionAggregatorAvg>;
  min?: Maybe<MemberInteractionAggregatorMin>;
  max?: Maybe<MemberInteractionAggregatorMax>;
};

export type MemberInteractionAggregatorSum = {
  __typename?: 'MemberInteractionAggregatorSum';
  quantity?: Maybe<Scalars['Float']>;
};

export type MemberInteractionAggregatorAvg = {
  __typename?: 'MemberInteractionAggregatorAvg';
  quantity?: Maybe<Scalars['Float']>;
};

export type MemberInteractionAggregatorMin = {
  __typename?: 'MemberInteractionAggregatorMin';
  quantity?: Maybe<Scalars['Float']>;
};

export type MemberInteractionAggregatorMax = {
  __typename?: 'MemberInteractionAggregatorMax';
  quantity?: Maybe<Scalars['Float']>;
};

export type MemberInteractionGroupBy = {
  __typename?: 'MemberInteractionGroupBy';
  id?: Maybe<Array<Maybe<MemberInteractionConnectionId>>>;
  _id?: Maybe<Array<Maybe<MemberInteractionConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MemberInteractionConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MemberInteractionConnectionUpdatedAt>>>;
  type?: Maybe<Array<Maybe<MemberInteractionConnectionType>>>;
  quantity?: Maybe<Array<Maybe<MemberInteractionConnectionQuantity>>>;
  receiver?: Maybe<Array<Maybe<MemberInteractionConnectionReceiver>>>;
  activity?: Maybe<Array<Maybe<MemberInteractionConnectionActivity>>>;
  workspace?: Maybe<Array<Maybe<MemberInteractionConnectionWorkspace>>>;
  actor?: Maybe<Array<Maybe<MemberInteractionConnectionActor>>>;
};

export type MemberInteractionConnectionId = {
  __typename?: 'MemberInteractionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnection_Id = {
  __typename?: 'MemberInteractionConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionCreatedAt = {
  __typename?: 'MemberInteractionConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionUpdatedAt = {
  __typename?: 'MemberInteractionConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionType = {
  __typename?: 'MemberInteractionConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionQuantity = {
  __typename?: 'MemberInteractionConnectionQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionReceiver = {
  __typename?: 'MemberInteractionConnectionReceiver';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionActivity = {
  __typename?: 'MemberInteractionConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionWorkspace = {
  __typename?: 'MemberInteractionConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionConnectionActor = {
  __typename?: 'MemberInteractionConnectionActor';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberInteractionConnection>;
};

export type MemberInteractionInput = {
  type: Enum_Memberinteraction_Type;
  quantity?: Maybe<Scalars['Int']>;
  receiver?: Maybe<Scalars['ID']>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  actor?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMemberInteractionInput = {
  type?: Maybe<Enum_Memberinteraction_Type>;
  quantity?: Maybe<Scalars['Int']>;
  receiver?: Maybe<Scalars['ID']>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  actor?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMemberInteractionInput = {
  data?: Maybe<MemberInteractionInput>;
};

export type CreateMemberInteractionPayload = {
  __typename?: 'createMemberInteractionPayload';
  memberInteraction?: Maybe<MemberInteraction>;
};

export type UpdateMemberInteractionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMemberInteractionInput>;
};

export type UpdateMemberInteractionPayload = {
  __typename?: 'updateMemberInteractionPayload';
  memberInteraction?: Maybe<MemberInteraction>;
};

export type DeleteMemberInteractionInput = {
  where?: Maybe<InputId>;
};

export type DeleteMemberInteractionPayload = {
  __typename?: 'deleteMemberInteractionPayload';
  memberInteraction?: Maybe<MemberInteraction>;
};

export enum Enum_Memberrole_Type {
  Administrator = 'ADMINISTRATOR',
  Editor = 'EDITOR',
  Auditor = 'AUDITOR',
  User = 'USER',
  Guest = 'GUEST'
}

export enum Enum_Memberrole_Scope {
  System = 'SYSTEM',
  Workspace = 'WORKSPACE',
  Group = 'GROUP',
  Activity = 'ACTIVITY'
}

export enum Enum_Memberrole_Status {
  Pending = 'PENDING',
  Normal = 'NORMAL',
  Block = 'BLOCK',
  Leave = 'LEAVE'
}

/**
 * 시스템 수준(scope: SYSTEM)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 디포라 서비스 관리. 가장 최상위 사용자로서 모든 기능과 데이터 접근 가능.
 * type이 USER인 경우, 디포라 앱 로그인. 자신의 웍스페이스 생성. 공개된 액티비티에 GUEST로 참여 가능. 디포라에 가입하면 USER type으로 멤버가 됨.
 *
 * 웍스페이스 수준(scope: WORKSPACE)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 해당 웍스페이스 관리. 웍스페이스 사용자 초대. 기존 사용자 탈퇴 처리. 신고된 콘텐츠 삭제. 공식 그룹 생성. 공식 이벤트 생성.
 * type이 USER인 경우, 해당 웍스페이스의 기본 그룹에 자동 가입되며 초대된 그룹에도 가입할 수 있음.
 * 동일한 멤버가 SYSTEM 수준에서는 USER인 사람이, WORKSPACE 수준에서는 ADMINISTRATOR, USER, GUEST 중 하나의 역할로 참여하게 되며 새로 aaid를 발급하지 않음.(새로 발급하는 방식에 대해서는 나중에 생각해 볼 것)
 *
 * 그룹 수준(scope: GROUP)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 해당 그룹에 대한 관리(그룹 정보 수정, 멤버 초대나 삭제, 게시판 설정 등).
 * type이 USER인 경우, 해당 그룹의 모든 액티비티에 참여 가능.
 *
 * 액티비티 수준(scope: ACTIVITY)에서의 접근 권한 관리
 * type이 ADMINISTRATOR인 경우, 해당 액티비티 관리(액티비티 정보 수정, 마감 연장이나 단축 등)
 * type이 USER인 경우, 해당 액티비티에 참여.
 * type이 EDITOR인 경우, 질의응답 이벤트에 올라오는 질문들에 대해 답변 등록.
 * type이 GUEST인 경우, 웍스페이스 중 초대받은 액티비티로만 바로 들어가게 됨. 회사 외부인 대상 설문 조사 등을 위한 사용자 유형. 웍스페이스의 공통 이벤트나 공지 등을 받을 수 없으며 자신이 참여한 액티비티만 볼 수 있음.
 */
export type MemberRole = {
  __typename?: 'MemberRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type?: Maybe<Enum_Memberrole_Type>;
  scope?: Maybe<Enum_Memberrole_Scope>;
  activity?: Maybe<Activity>;
  group?: Maybe<Group>;
  workspace?: Maybe<Workspace>;
  member?: Maybe<Member>;
  status?: Maybe<Enum_Memberrole_Status>;
  username?: Maybe<Scalars['String']>;
};

export type MemberRoleConnection = {
  __typename?: 'MemberRoleConnection';
  values?: Maybe<Array<Maybe<MemberRole>>>;
  groupBy?: Maybe<MemberRoleGroupBy>;
  aggregate?: Maybe<MemberRoleAggregator>;
};

export type MemberRoleAggregator = {
  __typename?: 'MemberRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MemberRoleGroupBy = {
  __typename?: 'MemberRoleGroupBy';
  id?: Maybe<Array<Maybe<MemberRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<MemberRoleConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MemberRoleConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MemberRoleConnectionUpdatedAt>>>;
  type?: Maybe<Array<Maybe<MemberRoleConnectionType>>>;
  scope?: Maybe<Array<Maybe<MemberRoleConnectionScope>>>;
  activity?: Maybe<Array<Maybe<MemberRoleConnectionActivity>>>;
  group?: Maybe<Array<Maybe<MemberRoleConnectionGroup>>>;
  workspace?: Maybe<Array<Maybe<MemberRoleConnectionWorkspace>>>;
  member?: Maybe<Array<Maybe<MemberRoleConnectionMember>>>;
  status?: Maybe<Array<Maybe<MemberRoleConnectionStatus>>>;
  username?: Maybe<Array<Maybe<MemberRoleConnectionUsername>>>;
};

export type MemberRoleConnectionId = {
  __typename?: 'MemberRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnection_Id = {
  __typename?: 'MemberRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionCreatedAt = {
  __typename?: 'MemberRoleConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionUpdatedAt = {
  __typename?: 'MemberRoleConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionType = {
  __typename?: 'MemberRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionScope = {
  __typename?: 'MemberRoleConnectionScope';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionActivity = {
  __typename?: 'MemberRoleConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionGroup = {
  __typename?: 'MemberRoleConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionWorkspace = {
  __typename?: 'MemberRoleConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionMember = {
  __typename?: 'MemberRoleConnectionMember';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionStatus = {
  __typename?: 'MemberRoleConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleConnectionUsername = {
  __typename?: 'MemberRoleConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberRoleConnection>;
};

export type MemberRoleInput = {
  type?: Maybe<Enum_Memberrole_Type>;
  scope?: Maybe<Enum_Memberrole_Scope>;
  activity?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  member?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Memberrole_Status>;
  username?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMemberRoleInput = {
  type?: Maybe<Enum_Memberrole_Type>;
  scope?: Maybe<Enum_Memberrole_Scope>;
  activity?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  member?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Memberrole_Status>;
  username?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMemberRoleInput = {
  data?: Maybe<MemberRoleInput>;
};

export type CreateMemberRolePayload = {
  __typename?: 'createMemberRolePayload';
  memberRole?: Maybe<MemberRole>;
};

export type UpdateMemberRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMemberRoleInput>;
};

export type UpdateMemberRolePayload = {
  __typename?: 'updateMemberRolePayload';
  memberRole?: Maybe<MemberRole>;
};

export type DeleteMemberRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteMemberRolePayload = {
  __typename?: 'deleteMemberRolePayload';
  memberRole?: Maybe<MemberRole>;
};

export enum Enum_Member_Userclass {
  Application = 'APPLICATION',
  System = 'SYSTEM',
  External = 'EXTERNAL'
}

/** 웍스페이스, 그룹, 액티비티의 멤버. 익명 옵션이 아닌 경우, 그룹이나 액티비티에서 별도의 멤버를 생성하지 않으며 웍스페이스의 멤버가 그 웍스페이스에 속해 있는 모든 그룹이나 액티비티에 접근할 수 있다. 하지만 어떤 익명 옵션으로 만들어지는 그룹인 경우에는 웍스페이스의 멤버와 다른 멤버 계정이 만들어지고 그 활동 가능한 범위는 해당 그룹으로만 제한된다. 마찬가지로 그룹 내의 모든 액티비티는 그룹 멤버로 참여 가능하지만 익명 옵션으로 만든 액티비티라면 그 안에서만 사용할 수 있는 별도의 멤버 계정이 만들어진다. Member는 Workspace, Group, Activity, Post, Interaction, MemberInteraction, MemberRole 등 다른 컬렉션에서 creator, writer, actor 등의 역할로 참조되지만 반대로 Member로부터 다른 컬렉션 정보에 대한 직접 참조를 저장하지 않아야 한다. 의도되지 않은 접근으로 멤버에 연결된 모든 정보가 노출될 수 있기 때문에 연결 고리를 끊기 위한 것이다. */
export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  userClass: Enum_Member_Userclass;
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  avatar?: Maybe<UploadFile>;
  lastAccessTime?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUser>;
  email?: Maybe<Scalars['String']>;
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  values?: Maybe<Array<Maybe<Member>>>;
  groupBy?: Maybe<MemberGroupBy>;
  aggregate?: Maybe<MemberAggregator>;
};

export type MemberAggregator = {
  __typename?: 'MemberAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MemberAggregatorSum>;
  avg?: Maybe<MemberAggregatorAvg>;
  min?: Maybe<MemberAggregatorMin>;
  max?: Maybe<MemberAggregatorMax>;
};

export type MemberAggregatorSum = {
  __typename?: 'MemberAggregatorSum';
  balance?: Maybe<Scalars['Float']>;
};

export type MemberAggregatorAvg = {
  __typename?: 'MemberAggregatorAvg';
  balance?: Maybe<Scalars['Float']>;
};

export type MemberAggregatorMin = {
  __typename?: 'MemberAggregatorMin';
  balance?: Maybe<Scalars['Float']>;
};

export type MemberAggregatorMax = {
  __typename?: 'MemberAggregatorMax';
  balance?: Maybe<Scalars['Float']>;
};

export type MemberGroupBy = {
  __typename?: 'MemberGroupBy';
  id?: Maybe<Array<Maybe<MemberConnectionId>>>;
  _id?: Maybe<Array<Maybe<MemberConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MemberConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MemberConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<MemberConnectionUsername>>>;
  userClass?: Maybe<Array<Maybe<MemberConnectionUserClass>>>;
  address?: Maybe<Array<Maybe<MemberConnectionAddress>>>;
  balance?: Maybe<Array<Maybe<MemberConnectionBalance>>>;
  avatar?: Maybe<Array<Maybe<MemberConnectionAvatar>>>;
  lastAccessTime?: Maybe<Array<Maybe<MemberConnectionLastAccessTime>>>;
  user?: Maybe<Array<Maybe<MemberConnectionUser>>>;
  email?: Maybe<Array<Maybe<MemberConnectionEmail>>>;
};

export type MemberConnectionId = {
  __typename?: 'MemberConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnection_Id = {
  __typename?: 'MemberConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionCreatedAt = {
  __typename?: 'MemberConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionUpdatedAt = {
  __typename?: 'MemberConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionUsername = {
  __typename?: 'MemberConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionUserClass = {
  __typename?: 'MemberConnectionUserClass';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionAddress = {
  __typename?: 'MemberConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionBalance = {
  __typename?: 'MemberConnectionBalance';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionAvatar = {
  __typename?: 'MemberConnectionAvatar';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionLastAccessTime = {
  __typename?: 'MemberConnectionLastAccessTime';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionUser = {
  __typename?: 'MemberConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionEmail = {
  __typename?: 'MemberConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberInput = {
  username: Scalars['String'];
  userClass: Enum_Member_Userclass;
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  avatar?: Maybe<Scalars['ID']>;
  aaid?: Maybe<Scalars['String']>;
  lastAccessTime?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMemberInput = {
  username?: Maybe<Scalars['String']>;
  userClass?: Maybe<Enum_Member_Userclass>;
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  avatar?: Maybe<Scalars['ID']>;
  aaid?: Maybe<Scalars['String']>;
  lastAccessTime?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMemberInput = {
  data?: Maybe<MemberInput>;
};

export type CreateMemberPayload = {
  __typename?: 'createMemberPayload';
  member?: Maybe<Member>;
};

export type UpdateMemberInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMemberInput>;
};

export type UpdateMemberPayload = {
  __typename?: 'updateMemberPayload';
  member?: Maybe<Member>;
};

export type DeleteMemberInput = {
  where?: Maybe<InputId>;
};

export type DeleteMemberPayload = {
  __typename?: 'deleteMemberPayload';
  member?: Maybe<Member>;
};

export enum Enum_Pointpurchase_Currencyunit {
  Krw = 'KRW',
  Usd = 'USD',
  Eur = 'EUR',
  Aud = 'AUD',
  Cad = 'CAD',
  Hkd = 'HKD',
  Chf = 'CHF',
  Gbp = 'GBP',
  Jpy = 'JPY',
  Cny = 'CNY',
  Btc = 'BTC',
  Eth = 'ETH',
  Boa = 'BOA'
}

export type PointPurchase = {
  __typename?: 'PointPurchase';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  pointAmount?: Maybe<Scalars['Float']>;
  currencyAmount?: Maybe<Scalars['Float']>;
  currencyUnit?: Maybe<Enum_Pointpurchase_Currencyunit>;
  purchaseDate?: Maybe<Scalars['DateTime']>;
  settlementInstruction?: Maybe<ComponentRewardSettlementInstruction>;
  transaction?: Maybe<Transaction>;
};

export type PointPurchaseConnection = {
  __typename?: 'PointPurchaseConnection';
  values?: Maybe<Array<Maybe<PointPurchase>>>;
  groupBy?: Maybe<PointPurchaseGroupBy>;
  aggregate?: Maybe<PointPurchaseAggregator>;
};

export type PointPurchaseAggregator = {
  __typename?: 'PointPurchaseAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<PointPurchaseAggregatorSum>;
  avg?: Maybe<PointPurchaseAggregatorAvg>;
  min?: Maybe<PointPurchaseAggregatorMin>;
  max?: Maybe<PointPurchaseAggregatorMax>;
};

export type PointPurchaseAggregatorSum = {
  __typename?: 'PointPurchaseAggregatorSum';
  pointAmount?: Maybe<Scalars['Float']>;
  currencyAmount?: Maybe<Scalars['Float']>;
};

export type PointPurchaseAggregatorAvg = {
  __typename?: 'PointPurchaseAggregatorAvg';
  pointAmount?: Maybe<Scalars['Float']>;
  currencyAmount?: Maybe<Scalars['Float']>;
};

export type PointPurchaseAggregatorMin = {
  __typename?: 'PointPurchaseAggregatorMin';
  pointAmount?: Maybe<Scalars['Float']>;
  currencyAmount?: Maybe<Scalars['Float']>;
};

export type PointPurchaseAggregatorMax = {
  __typename?: 'PointPurchaseAggregatorMax';
  pointAmount?: Maybe<Scalars['Float']>;
  currencyAmount?: Maybe<Scalars['Float']>;
};

export type PointPurchaseGroupBy = {
  __typename?: 'PointPurchaseGroupBy';
  id?: Maybe<Array<Maybe<PointPurchaseConnectionId>>>;
  _id?: Maybe<Array<Maybe<PointPurchaseConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PointPurchaseConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PointPurchaseConnectionUpdatedAt>>>;
  pointAmount?: Maybe<Array<Maybe<PointPurchaseConnectionPointAmount>>>;
  currencyAmount?: Maybe<Array<Maybe<PointPurchaseConnectionCurrencyAmount>>>;
  currencyUnit?: Maybe<Array<Maybe<PointPurchaseConnectionCurrencyUnit>>>;
  purchaseDate?: Maybe<Array<Maybe<PointPurchaseConnectionPurchaseDate>>>;
  settlementInstruction?: Maybe<Array<Maybe<PointPurchaseConnectionSettlementInstruction>>>;
  transaction?: Maybe<Array<Maybe<PointPurchaseConnectionTransaction>>>;
};

export type PointPurchaseConnectionId = {
  __typename?: 'PointPurchaseConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnection_Id = {
  __typename?: 'PointPurchaseConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionCreatedAt = {
  __typename?: 'PointPurchaseConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionUpdatedAt = {
  __typename?: 'PointPurchaseConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionPointAmount = {
  __typename?: 'PointPurchaseConnectionPointAmount';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionCurrencyAmount = {
  __typename?: 'PointPurchaseConnectionCurrencyAmount';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionCurrencyUnit = {
  __typename?: 'PointPurchaseConnectionCurrencyUnit';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionPurchaseDate = {
  __typename?: 'PointPurchaseConnectionPurchaseDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionSettlementInstruction = {
  __typename?: 'PointPurchaseConnectionSettlementInstruction';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseConnectionTransaction = {
  __typename?: 'PointPurchaseConnectionTransaction';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PointPurchaseConnection>;
};

export type PointPurchaseInput = {
  pointAmount?: Maybe<Scalars['Float']>;
  currencyAmount?: Maybe<Scalars['Float']>;
  currencyUnit?: Maybe<Enum_Pointpurchase_Currencyunit>;
  purchaseDate?: Maybe<Scalars['DateTime']>;
  settlementInstruction?: Maybe<ComponentRewardSettlementInstructionInput>;
  transaction?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPointPurchaseInput = {
  pointAmount?: Maybe<Scalars['Float']>;
  currencyAmount?: Maybe<Scalars['Float']>;
  currencyUnit?: Maybe<Enum_Pointpurchase_Currencyunit>;
  purchaseDate?: Maybe<Scalars['DateTime']>;
  settlementInstruction?: Maybe<EditComponentRewardSettlementInstructionInput>;
  transaction?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePointPurchaseInput = {
  data?: Maybe<PointPurchaseInput>;
};

export type CreatePointPurchasePayload = {
  __typename?: 'createPointPurchasePayload';
  pointPurchase?: Maybe<PointPurchase>;
};

export type UpdatePointPurchaseInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPointPurchaseInput>;
};

export type UpdatePointPurchasePayload = {
  __typename?: 'updatePointPurchasePayload';
  pointPurchase?: Maybe<PointPurchase>;
};

export type DeletePointPurchaseInput = {
  where?: Maybe<InputId>;
};

export type DeletePointPurchasePayload = {
  __typename?: 'deletePointPurchasePayload';
  pointPurchase?: Maybe<PointPurchase>;
};

export type PollOptionDynamicZone = ComponentActivityPollOption | ComponentActivityTemplateOption;


/** 액티비티를 구성하는 내용 중 투표(Poll) 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 투표 뿐만 아니라 여러 투표에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능. */
export type Poll = {
  __typename?: 'Poll';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isTemplate: Scalars['Boolean'];
  option: Array<Maybe<PollOptionDynamicZone>>;
  activity?: Maybe<Activity>;
  template?: Maybe<Poll>;
  workspace?: Maybe<Workspace>;
  creator?: Maybe<Member>;
  questions?: Maybe<Array<Maybe<Question>>>;
};


/** 액티비티를 구성하는 내용 중 투표(Poll) 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 투표 뿐만 아니라 여러 투표에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능. */
export type PollQuestionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PollConnection = {
  __typename?: 'PollConnection';
  values?: Maybe<Array<Maybe<Poll>>>;
  groupBy?: Maybe<PollGroupBy>;
  aggregate?: Maybe<PollAggregator>;
};

export type PollAggregator = {
  __typename?: 'PollAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PollGroupBy = {
  __typename?: 'PollGroupBy';
  id?: Maybe<Array<Maybe<PollConnectionId>>>;
  _id?: Maybe<Array<Maybe<PollConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PollConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PollConnectionUpdatedAt>>>;
  isTemplate?: Maybe<Array<Maybe<PollConnectionIsTemplate>>>;
  activity?: Maybe<Array<Maybe<PollConnectionActivity>>>;
  template?: Maybe<Array<Maybe<PollConnectionTemplate>>>;
  workspace?: Maybe<Array<Maybe<PollConnectionWorkspace>>>;
  creator?: Maybe<Array<Maybe<PollConnectionCreator>>>;
};

export type PollConnectionId = {
  __typename?: 'PollConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnection_Id = {
  __typename?: 'PollConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnectionCreatedAt = {
  __typename?: 'PollConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnectionUpdatedAt = {
  __typename?: 'PollConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnectionIsTemplate = {
  __typename?: 'PollConnectionIsTemplate';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnectionActivity = {
  __typename?: 'PollConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnectionTemplate = {
  __typename?: 'PollConnectionTemplate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnectionWorkspace = {
  __typename?: 'PollConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PollConnection>;
};

export type PollConnectionCreator = {
  __typename?: 'PollConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PollConnection>;
};

export type PollInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['PollOptionDynamicZoneInput']>;
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activity?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPollInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['PollOptionDynamicZoneInput']>;
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activity?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePollInput = {
  data?: Maybe<PollInput>;
};

export type CreatePollPayload = {
  __typename?: 'createPollPayload';
  poll?: Maybe<Poll>;
};

export type UpdatePollInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPollInput>;
};

export type UpdatePollPayload = {
  __typename?: 'updatePollPayload';
  poll?: Maybe<Poll>;
};

export type DeletePollInput = {
  where?: Maybe<InputId>;
};

export type DeletePollPayload = {
  __typename?: 'deletePollPayload';
  poll?: Maybe<Poll>;
};

export enum Enum_Post_Type {
  SurveyResponse = 'SURVEY_RESPONSE',
  QuizResponse = 'QUIZ_RESPONSE',
  PollResponse = 'POLL_RESPONSE',
  BoardArticle = 'BOARD_ARTICLE',
  IdeaboxProposal = 'IDEABOX_PROPOSAL',
  QnaQuestion = 'QNA_QUESTION',
  CommentOnActivity = 'COMMENT_ON_ACTIVITY',
  CommentOnPost = 'COMMENT_ON_POST',
  ReplyOnComment = 'REPLY_ON_COMMENT'
}

export enum Enum_Post_Status {
  Open = 'OPEN',
  DeleteByReport = 'DELETE_BY_REPORT',
  KeepByReport = 'KEEP_BY_REPORT'
}

export type PostContentDynamicZone = ComponentPostCommentOnActivity | ComponentPostCommentOnPost | ComponentPostReply | ComponentPostScaleAnswer | ComponentPostSingleChoiceAnswer | ComponentPostMultipleChoiceAnswer | ComponentPostTextAnswer | ComponentPostShortAnswer | ComponentPostProposal | ComponentPostArticle | ComponentPostQnaQuestion;


/**
 * 액티비티에 대한 참여 형태는 액티비티 종류에 따라 설문조사, 퀴즈, 투표에 대한 답안 작성, 게시판에서의 게시물 작성, Q&A에서의 질문 작성, 아이디어박스에서의 제안 작성 등이며, 그렇게 작성된 것들을 게시물이라고 볼 수 있다. 이러한 응답 형태의 참여가 아니더라도 액티비티 자체 또는 그 액티비티에 참여한 사람들의 응답에 대한 의견을 표시하기 위해 작성된 댓글 또는 답글도 모두 게시물로 간주된다.
 *
 * ## Mutation 작성 방법:
 * (퀴즈 참여 응답에 해당하는 포스트 생성하는 예시)
 *
 * mutation newQuizResponse {
 *  createPost (input: {
 *  data: {
 *  type: QUIZ_RESPONSE,
 *  content: [
 *  {
 *  __typename: "ComponentPostSingleChoiceAnswer",
 *  selection: {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 55,
 *  }
 *  question: 4
 *  },
 *  {
 *  __typename: "ComponentPostMultipleChoiceAnswer",
 *  __component: "post.multiple-choice-answer",
 *  selection: [
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 1,
 *  value: 18
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 2,
 *  value: 810
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 432
 *  }
 *  ],
 *  question: 5
 *  }
 *  ]
 *  activity: 1,
 *  }}) {
 *  post {
 *  ...postFields
 *  }
 *  }
 *  }
 */
export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: Enum_Post_Type;
  content: Array<Maybe<PostContentDynamicZone>>;
  activity?: Maybe<Activity>;
  parentPost?: Maybe<Post>;
  writer?: Maybe<Member>;
  myScore?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Post_Status>;
  interactions?: Maybe<Array<Maybe<Interaction>>>;
  childPosts?: Maybe<Array<Maybe<Post>>>;
  attachment?: Maybe<Array<Maybe<UploadFile>>>;
};


/**
 * 액티비티에 대한 참여 형태는 액티비티 종류에 따라 설문조사, 퀴즈, 투표에 대한 답안 작성, 게시판에서의 게시물 작성, Q&A에서의 질문 작성, 아이디어박스에서의 제안 작성 등이며, 그렇게 작성된 것들을 게시물이라고 볼 수 있다. 이러한 응답 형태의 참여가 아니더라도 액티비티 자체 또는 그 액티비티에 참여한 사람들의 응답에 대한 의견을 표시하기 위해 작성된 댓글 또는 답글도 모두 게시물로 간주된다.
 *
 * ## Mutation 작성 방법:
 * (퀴즈 참여 응답에 해당하는 포스트 생성하는 예시)
 *
 * mutation newQuizResponse {
 *  createPost (input: {
 *  data: {
 *  type: QUIZ_RESPONSE,
 *  content: [
 *  {
 *  __typename: "ComponentPostSingleChoiceAnswer",
 *  selection: {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 55,
 *  }
 *  question: 4
 *  },
 *  {
 *  __typename: "ComponentPostMultipleChoiceAnswer",
 *  __component: "post.multiple-choice-answer",
 *  selection: [
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 1,
 *  value: 18
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 2,
 *  value: 810
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 432
 *  }
 *  ],
 *  question: 5
 *  }
 *  ]
 *  activity: 1,
 *  }}) {
 *  post {
 *  ...postFields
 *  }
 *  }
 *  }
 */
export type PostInteractionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


/**
 * 액티비티에 대한 참여 형태는 액티비티 종류에 따라 설문조사, 퀴즈, 투표에 대한 답안 작성, 게시판에서의 게시물 작성, Q&A에서의 질문 작성, 아이디어박스에서의 제안 작성 등이며, 그렇게 작성된 것들을 게시물이라고 볼 수 있다. 이러한 응답 형태의 참여가 아니더라도 액티비티 자체 또는 그 액티비티에 참여한 사람들의 응답에 대한 의견을 표시하기 위해 작성된 댓글 또는 답글도 모두 게시물로 간주된다.
 *
 * ## Mutation 작성 방법:
 * (퀴즈 참여 응답에 해당하는 포스트 생성하는 예시)
 *
 * mutation newQuizResponse {
 *  createPost (input: {
 *  data: {
 *  type: QUIZ_RESPONSE,
 *  content: [
 *  {
 *  __typename: "ComponentPostSingleChoiceAnswer",
 *  selection: {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 55,
 *  }
 *  question: 4
 *  },
 *  {
 *  __typename: "ComponentPostMultipleChoiceAnswer",
 *  __component: "post.multiple-choice-answer",
 *  selection: [
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 1,
 *  value: 18
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 2,
 *  value: 810
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 432
 *  }
 *  ],
 *  question: 5
 *  }
 *  ]
 *  activity: 1,
 *  }}) {
 *  post {
 *  ...postFields
 *  }
 *  }
 *  }
 */
export type PostChildPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


/**
 * 액티비티에 대한 참여 형태는 액티비티 종류에 따라 설문조사, 퀴즈, 투표에 대한 답안 작성, 게시판에서의 게시물 작성, Q&A에서의 질문 작성, 아이디어박스에서의 제안 작성 등이며, 그렇게 작성된 것들을 게시물이라고 볼 수 있다. 이러한 응답 형태의 참여가 아니더라도 액티비티 자체 또는 그 액티비티에 참여한 사람들의 응답에 대한 의견을 표시하기 위해 작성된 댓글 또는 답글도 모두 게시물로 간주된다.
 *
 * ## Mutation 작성 방법:
 * (퀴즈 참여 응답에 해당하는 포스트 생성하는 예시)
 *
 * mutation newQuizResponse {
 *  createPost (input: {
 *  data: {
 *  type: QUIZ_RESPONSE,
 *  content: [
 *  {
 *  __typename: "ComponentPostSingleChoiceAnswer",
 *  selection: {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 55,
 *  }
 *  question: 4
 *  },
 *  {
 *  __typename: "ComponentPostMultipleChoiceAnswer",
 *  __component: "post.multiple-choice-answer",
 *  selection: [
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 1,
 *  value: 18
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 2,
 *  value: 810
 *  },
 *  {
 *  __typename: "ComponentPostSelection",
 *  __component: "post.selection",
 *  sequence: 3,
 *  value: 432
 *  }
 *  ],
 *  question: 5
 *  }
 *  ]
 *  activity: 1,
 *  }}) {
 *  post {
 *  ...postFields
 *  }
 *  }
 *  }
 */
export type PostAttachmentArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  values?: Maybe<Array<Maybe<Post>>>;
  groupBy?: Maybe<PostGroupBy>;
  aggregate?: Maybe<PostAggregator>;
};

export type PostAggregator = {
  __typename?: 'PostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<PostAggregatorSum>;
  avg?: Maybe<PostAggregatorAvg>;
  min?: Maybe<PostAggregatorMin>;
  max?: Maybe<PostAggregatorMax>;
};

export type PostAggregatorSum = {
  __typename?: 'PostAggregatorSum';
  myScore?: Maybe<Scalars['Float']>;
};

export type PostAggregatorAvg = {
  __typename?: 'PostAggregatorAvg';
  myScore?: Maybe<Scalars['Float']>;
};

export type PostAggregatorMin = {
  __typename?: 'PostAggregatorMin';
  myScore?: Maybe<Scalars['Float']>;
};

export type PostAggregatorMax = {
  __typename?: 'PostAggregatorMax';
  myScore?: Maybe<Scalars['Float']>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  id?: Maybe<Array<Maybe<PostConnectionId>>>;
  _id?: Maybe<Array<Maybe<PostConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PostConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PostConnectionUpdatedAt>>>;
  type?: Maybe<Array<Maybe<PostConnectionType>>>;
  activity?: Maybe<Array<Maybe<PostConnectionActivity>>>;
  parentPost?: Maybe<Array<Maybe<PostConnectionParentPost>>>;
  writer?: Maybe<Array<Maybe<PostConnectionWriter>>>;
  myScore?: Maybe<Array<Maybe<PostConnectionMyScore>>>;
  status?: Maybe<Array<Maybe<PostConnectionStatus>>>;
};

export type PostConnectionId = {
  __typename?: 'PostConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnection_Id = {
  __typename?: 'PostConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionCreatedAt = {
  __typename?: 'PostConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionUpdatedAt = {
  __typename?: 'PostConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionType = {
  __typename?: 'PostConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionActivity = {
  __typename?: 'PostConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionParentPost = {
  __typename?: 'PostConnectionParentPost';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionWriter = {
  __typename?: 'PostConnectionWriter';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionMyScore = {
  __typename?: 'PostConnectionMyScore';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionStatus = {
  __typename?: 'PostConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostInput = {
  type: Enum_Post_Type;
  content: Array<Scalars['PostContentDynamicZoneInput']>;
  activity?: Maybe<Scalars['ID']>;
  interactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentPost?: Maybe<Scalars['ID']>;
  childPosts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  writer?: Maybe<Scalars['ID']>;
  myScore?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Post_Status>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostInput = {
  type?: Maybe<Enum_Post_Type>;
  content: Array<Scalars['PostContentDynamicZoneInput']>;
  activity?: Maybe<Scalars['ID']>;
  interactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentPost?: Maybe<Scalars['ID']>;
  childPosts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  writer?: Maybe<Scalars['ID']>;
  myScore?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Post_Status>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePostInput = {
  data?: Maybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Post>;
};

export type UpdatePostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostInput>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Post>;
};

export type DeletePostInput = {
  where?: Maybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Post>;
};

export type QnaOptionDynamicZone = ComponentActivityQnaOption | ComponentActivityTemplateOption;


export type Qna = {
  __typename?: 'Qna';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isTemplate?: Maybe<Scalars['Boolean']>;
  activity?: Maybe<Activity>;
  workspace?: Maybe<Workspace>;
  creator?: Maybe<Member>;
  option?: Maybe<Array<Maybe<QnaOptionDynamicZone>>>;
  responders?: Maybe<Array<Maybe<Member>>>;
};


export type QnaRespondersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QnaConnection = {
  __typename?: 'QnaConnection';
  values?: Maybe<Array<Maybe<Qna>>>;
  groupBy?: Maybe<QnaGroupBy>;
  aggregate?: Maybe<QnaAggregator>;
};

export type QnaAggregator = {
  __typename?: 'QnaAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type QnaGroupBy = {
  __typename?: 'QnaGroupBy';
  id?: Maybe<Array<Maybe<QnaConnectionId>>>;
  _id?: Maybe<Array<Maybe<QnaConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<QnaConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<QnaConnectionUpdatedAt>>>;
  isTemplate?: Maybe<Array<Maybe<QnaConnectionIsTemplate>>>;
  activity?: Maybe<Array<Maybe<QnaConnectionActivity>>>;
  workspace?: Maybe<Array<Maybe<QnaConnectionWorkspace>>>;
  creator?: Maybe<Array<Maybe<QnaConnectionCreator>>>;
};

export type QnaConnectionId = {
  __typename?: 'QnaConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaConnection_Id = {
  __typename?: 'QnaConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaConnectionCreatedAt = {
  __typename?: 'QnaConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaConnectionUpdatedAt = {
  __typename?: 'QnaConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaConnectionIsTemplate = {
  __typename?: 'QnaConnectionIsTemplate';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaConnectionActivity = {
  __typename?: 'QnaConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaConnectionWorkspace = {
  __typename?: 'QnaConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaConnectionCreator = {
  __typename?: 'QnaConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QnaConnection>;
};

export type QnaInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  option?: Maybe<Array<Scalars['QnaOptionDynamicZoneInput']>>;
  responders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditQnaInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  option?: Maybe<Array<Scalars['QnaOptionDynamicZoneInput']>>;
  responders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateQnaInput = {
  data?: Maybe<QnaInput>;
};

export type CreateQnaPayload = {
  __typename?: 'createQnaPayload';
  qna?: Maybe<Qna>;
};

export type UpdateQnaInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditQnaInput>;
};

export type UpdateQnaPayload = {
  __typename?: 'updateQnaPayload';
  qna?: Maybe<Qna>;
};

export type DeleteQnaInput = {
  where?: Maybe<InputId>;
};

export type DeleteQnaPayload = {
  __typename?: 'deleteQnaPayload';
  qna?: Maybe<Qna>;
};

export type QrcodeComm = {
  __typename?: 'QrcodeComm';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  pubKey?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['Int']>;
};

export type QrcodeCommConnection = {
  __typename?: 'QrcodeCommConnection';
  values?: Maybe<Array<Maybe<QrcodeComm>>>;
  groupBy?: Maybe<QrcodeCommGroupBy>;
  aggregate?: Maybe<QrcodeCommAggregator>;
};

export type QrcodeCommAggregator = {
  __typename?: 'QrcodeCommAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<QrcodeCommAggregatorSum>;
  avg?: Maybe<QrcodeCommAggregatorAvg>;
  min?: Maybe<QrcodeCommAggregatorMin>;
  max?: Maybe<QrcodeCommAggregatorMax>;
};

export type QrcodeCommAggregatorSum = {
  __typename?: 'QrcodeCommAggregatorSum';
  expireAt?: Maybe<Scalars['Float']>;
};

export type QrcodeCommAggregatorAvg = {
  __typename?: 'QrcodeCommAggregatorAvg';
  expireAt?: Maybe<Scalars['Float']>;
};

export type QrcodeCommAggregatorMin = {
  __typename?: 'QrcodeCommAggregatorMin';
  expireAt?: Maybe<Scalars['Float']>;
};

export type QrcodeCommAggregatorMax = {
  __typename?: 'QrcodeCommAggregatorMax';
  expireAt?: Maybe<Scalars['Float']>;
};

export type QrcodeCommGroupBy = {
  __typename?: 'QrcodeCommGroupBy';
  id?: Maybe<Array<Maybe<QrcodeCommConnectionId>>>;
  _id?: Maybe<Array<Maybe<QrcodeCommConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<QrcodeCommConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<QrcodeCommConnectionUpdatedAt>>>;
  pubKey?: Maybe<Array<Maybe<QrcodeCommConnectionPubKey>>>;
  message?: Maybe<Array<Maybe<QrcodeCommConnectionMessage>>>;
  expireAt?: Maybe<Array<Maybe<QrcodeCommConnectionExpireAt>>>;
};

export type QrcodeCommConnectionId = {
  __typename?: 'QrcodeCommConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QrcodeCommConnection>;
};

export type QrcodeCommConnection_Id = {
  __typename?: 'QrcodeCommConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QrcodeCommConnection>;
};

export type QrcodeCommConnectionCreatedAt = {
  __typename?: 'QrcodeCommConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QrcodeCommConnection>;
};

export type QrcodeCommConnectionUpdatedAt = {
  __typename?: 'QrcodeCommConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QrcodeCommConnection>;
};

export type QrcodeCommConnectionPubKey = {
  __typename?: 'QrcodeCommConnectionPubKey';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QrcodeCommConnection>;
};

export type QrcodeCommConnectionMessage = {
  __typename?: 'QrcodeCommConnectionMessage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QrcodeCommConnection>;
};

export type QrcodeCommConnectionExpireAt = {
  __typename?: 'QrcodeCommConnectionExpireAt';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<QrcodeCommConnection>;
};

export type QrcodeCommInput = {
  peerHash: Scalars['String'];
  finalHash: Scalars['String'];
  pubKey?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditQrcodeCommInput = {
  peerHash?: Maybe<Scalars['String']>;
  finalHash?: Maybe<Scalars['String']>;
  pubKey?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateQrcodeCommInput = {
  data?: Maybe<QrcodeCommInput>;
};

export type CreateQrcodeCommPayload = {
  __typename?: 'createQrcodeCommPayload';
  qrcodeComm?: Maybe<QrcodeComm>;
};

export type UpdateQrcodeCommInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditQrcodeCommInput>;
};

export type UpdateQrcodeCommPayload = {
  __typename?: 'updateQrcodeCommPayload';
  qrcodeComm?: Maybe<QrcodeComm>;
};

export type DeleteQrcodeCommInput = {
  where?: Maybe<InputId>;
};

export type DeleteQrcodeCommPayload = {
  __typename?: 'deleteQrcodeCommPayload';
  qrcodeComm?: Maybe<QrcodeComm>;
};

export enum Enum_Question_Type {
  SingleChoice = 'SINGLE_CHOICE',
  MultipleChoice = 'MULTIPLE_CHOICE',
  Scale = 'SCALE',
  ShortAnswer = 'SHORT_ANSWER',
  Text = 'TEXT',
  Pagebreak = 'PAGEBREAK'
}

export enum Enum_Question_Status {
  Open = 'OPEN',
  Delete = 'DELETE'
}

export type QuestionContentDynamicZone = ComponentActivityScaleOption | ComponentActivityTextOption | ComponentActivityChoiceOptionList;


/**
 * 설문, 퀴즈, 투표 등에 포함되는 문제.
 * 각 문제를 별도로 저장함으로써 참여자의 답안이 어떤 문제를 참조하는 지 지정할 수 있는 장점이 있으며, 문제은행을 만들기 용이하다. 설문조사, 퀴즈, 투표 양식을 새로 만들어 저장하려면, 먼저 이 컬렉션에 문제들을 생성하여 저장하고, 만들어진 문제들의 ID 목록을 Survey, Quiz, Poll 컬렉션의 questions 필드에 저장한다.
 *
 * ## Mutation 방법:
 * mutation newQuestion {
 *  createQuestion (input: {
 *  data: {
 *  sequence: 1
 *  type: SINGLE_CHOICE,
 *  title: "수리능력 평가",
 *  description: "1부터 10까지의 합은?",
 *  content: {
 *  __typename: "ComponentActivityChoiceOptionList",
 *  item: [
 *  {
 *  sequence: 1,
 *  label: "가",
 *  text: "11",
 *  value: 11
 *  },
 *  {
 *  sequence: 2,
 *  label: "나",
 *  text: "50",
 *  value: 50
 *  },
 *  {
 *  sequence: 3,
 *  label: "다",
 *  text: "55",
 *  value: 55
 *  },
 *  {
 *  sequence: 4,
 *  label: "라",
 *  text: "101",
 *  value: 101
 *  },
 *  ]
 *  }
 *  tags: "#수리영역 #덧셈 #퀴즈 #자연수",
 *  point: 10,
 *  quiz: 1,
 *  survey: null,
 *  poll: null,
 *  workspace: 1
 *  }
 *  }
 * ) {
 *  question {
 *  ...questionFields
 *  }
 *  }
 *  }
 */
export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  type: Enum_Question_Type;
  content: Array<Maybe<QuestionContentDynamicZone>>;
  tags?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Float']>;
  survey?: Maybe<Survey>;
  poll?: Maybe<Poll>;
  quiz?: Maybe<Quiz>;
  workspace?: Maybe<Workspace>;
  status?: Maybe<Enum_Question_Status>;
  image?: Maybe<Array<Maybe<UploadFile>>>;
};


/**
 * 설문, 퀴즈, 투표 등에 포함되는 문제.
 * 각 문제를 별도로 저장함으로써 참여자의 답안이 어떤 문제를 참조하는 지 지정할 수 있는 장점이 있으며, 문제은행을 만들기 용이하다. 설문조사, 퀴즈, 투표 양식을 새로 만들어 저장하려면, 먼저 이 컬렉션에 문제들을 생성하여 저장하고, 만들어진 문제들의 ID 목록을 Survey, Quiz, Poll 컬렉션의 questions 필드에 저장한다.
 *
 * ## Mutation 방법:
 * mutation newQuestion {
 *  createQuestion (input: {
 *  data: {
 *  sequence: 1
 *  type: SINGLE_CHOICE,
 *  title: "수리능력 평가",
 *  description: "1부터 10까지의 합은?",
 *  content: {
 *  __typename: "ComponentActivityChoiceOptionList",
 *  item: [
 *  {
 *  sequence: 1,
 *  label: "가",
 *  text: "11",
 *  value: 11
 *  },
 *  {
 *  sequence: 2,
 *  label: "나",
 *  text: "50",
 *  value: 50
 *  },
 *  {
 *  sequence: 3,
 *  label: "다",
 *  text: "55",
 *  value: 55
 *  },
 *  {
 *  sequence: 4,
 *  label: "라",
 *  text: "101",
 *  value: 101
 *  },
 *  ]
 *  }
 *  tags: "#수리영역 #덧셈 #퀴즈 #자연수",
 *  point: 10,
 *  quiz: 1,
 *  survey: null,
 *  poll: null,
 *  workspace: 1
 *  }
 *  }
 * ) {
 *  question {
 *  ...questionFields
 *  }
 *  }
 *  }
 */
export type QuestionImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  values?: Maybe<Array<Maybe<Question>>>;
  groupBy?: Maybe<QuestionGroupBy>;
  aggregate?: Maybe<QuestionAggregator>;
};

export type QuestionAggregator = {
  __typename?: 'QuestionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<QuestionAggregatorSum>;
  avg?: Maybe<QuestionAggregatorAvg>;
  min?: Maybe<QuestionAggregatorMin>;
  max?: Maybe<QuestionAggregatorMax>;
};

export type QuestionAggregatorSum = {
  __typename?: 'QuestionAggregatorSum';
  sequence?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type QuestionAggregatorAvg = {
  __typename?: 'QuestionAggregatorAvg';
  sequence?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type QuestionAggregatorMin = {
  __typename?: 'QuestionAggregatorMin';
  sequence?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type QuestionAggregatorMax = {
  __typename?: 'QuestionAggregatorMax';
  sequence?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type QuestionGroupBy = {
  __typename?: 'QuestionGroupBy';
  id?: Maybe<Array<Maybe<QuestionConnectionId>>>;
  _id?: Maybe<Array<Maybe<QuestionConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<QuestionConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<QuestionConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<QuestionConnectionTitle>>>;
  description?: Maybe<Array<Maybe<QuestionConnectionDescription>>>;
  key?: Maybe<Array<Maybe<QuestionConnectionKey>>>;
  isRequired?: Maybe<Array<Maybe<QuestionConnectionIsRequired>>>;
  type?: Maybe<Array<Maybe<QuestionConnectionType>>>;
  tags?: Maybe<Array<Maybe<QuestionConnectionTags>>>;
  sequence?: Maybe<Array<Maybe<QuestionConnectionSequence>>>;
  point?: Maybe<Array<Maybe<QuestionConnectionPoint>>>;
  survey?: Maybe<Array<Maybe<QuestionConnectionSurvey>>>;
  poll?: Maybe<Array<Maybe<QuestionConnectionPoll>>>;
  quiz?: Maybe<Array<Maybe<QuestionConnectionQuiz>>>;
  workspace?: Maybe<Array<Maybe<QuestionConnectionWorkspace>>>;
  status?: Maybe<Array<Maybe<QuestionConnectionStatus>>>;
};

export type QuestionConnectionId = {
  __typename?: 'QuestionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnection_Id = {
  __typename?: 'QuestionConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionCreatedAt = {
  __typename?: 'QuestionConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionUpdatedAt = {
  __typename?: 'QuestionConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionTitle = {
  __typename?: 'QuestionConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionDescription = {
  __typename?: 'QuestionConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionKey = {
  __typename?: 'QuestionConnectionKey';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionIsRequired = {
  __typename?: 'QuestionConnectionIsRequired';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionType = {
  __typename?: 'QuestionConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionTags = {
  __typename?: 'QuestionConnectionTags';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionSequence = {
  __typename?: 'QuestionConnectionSequence';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionPoint = {
  __typename?: 'QuestionConnectionPoint';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionSurvey = {
  __typename?: 'QuestionConnectionSurvey';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionPoll = {
  __typename?: 'QuestionConnectionPoll';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionQuiz = {
  __typename?: 'QuestionConnectionQuiz';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionWorkspace = {
  __typename?: 'QuestionConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionConnectionStatus = {
  __typename?: 'QuestionConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<QuestionConnection>;
};

export type QuestionInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  type: Enum_Question_Type;
  content: Array<Scalars['QuestionContentDynamicZoneInput']>;
  tags?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Float']>;
  survey?: Maybe<Scalars['ID']>;
  poll?: Maybe<Scalars['ID']>;
  quiz?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Question_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditQuestionInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Enum_Question_Type>;
  content: Array<Scalars['QuestionContentDynamicZoneInput']>;
  tags?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Float']>;
  survey?: Maybe<Scalars['ID']>;
  poll?: Maybe<Scalars['ID']>;
  quiz?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Question_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateQuestionInput = {
  data?: Maybe<QuestionInput>;
};

export type CreateQuestionPayload = {
  __typename?: 'createQuestionPayload';
  question?: Maybe<Question>;
};

export type UpdateQuestionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditQuestionInput>;
};

export type UpdateQuestionPayload = {
  __typename?: 'updateQuestionPayload';
  question?: Maybe<Question>;
};

export type DeleteQuestionInput = {
  where?: Maybe<InputId>;
};

export type DeleteQuestionPayload = {
  __typename?: 'deleteQuestionPayload';
  question?: Maybe<Question>;
};

export type QuizOptionDynamicZone = ComponentActivityTemplateOption | ComponentActivityQuizOption;


export type QuizAnswersDynamicZone = ComponentPostSingleChoiceAnswer | ComponentPostMultipleChoiceAnswer | ComponentPostTextAnswer | ComponentPostShortAnswer;


/**
 * 액티비티를 구성하는 내용 중 퀴즈 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 퀴즈 뿐만 아니라 여러 퀴즈에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능.
 *
 * ## Mutation 방법:
 * mutation newQuiz {
 *   createQuiz(input: {
 *     data: {
 *       title: "두뇌 운동에 도움을 주는 깜짝 퀴즈",
 *       description: "이 퀴즈를 다 푸신 분께는 추첨을 통해 근사한 경품을 드립니다. 마니마니 참여해 주세요.",
 *       isTemplate: false,
 *       option: {
 *         __typename: "ComponentActivityQuizOption",
 *         shareResult: true
 *       }
 *       questions: [],
 *       # 퀴즈 정답 목록
 *       answers: [
 *       {
 *         __typename: "ComponentPostSingleChoiceAnswer",
 *         selection: {
 *           __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 3,
 *           value: 55,
 *         }
 *         key: "1"    # 문제 번호
 *       },
 *       {
 *         __typename: "ComponentPostMultipleChoiceAnswer",
 *         __component: "post.multiple-choice-answer",
 *         selection: [
 *         {
 *           __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 1,
 *           value: 18
 *         },
 *       {
 *             __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 2,
 *           value: 810
 *         },
 *         {
 *           __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 3,
 *           value: 432
 *         } ],
 *         key: "2"  # 문제 번호
 *       } ],
 *       activity: 4,
 *       template: null
 *     }
 *   } ) {
 *     quiz {
 *       ...quizFields
 *     }
 *   }
 * }
 */
export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isTemplate: Scalars['Boolean'];
  option: Array<Maybe<QuizOptionDynamicZone>>;
  answers?: Maybe<Array<Maybe<QuizAnswersDynamicZone>>>;
  activity?: Maybe<Activity>;
  workspace?: Maybe<Workspace>;
  template?: Maybe<Quiz>;
  tier?: Maybe<Array<Maybe<ComponentActivityTier>>>;
  creator?: Maybe<Member>;
  questions?: Maybe<Array<Maybe<Question>>>;
};


/**
 * 액티비티를 구성하는 내용 중 퀴즈 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 퀴즈 뿐만 아니라 여러 퀴즈에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능.
 *
 * ## Mutation 방법:
 * mutation newQuiz {
 *   createQuiz(input: {
 *     data: {
 *       title: "두뇌 운동에 도움을 주는 깜짝 퀴즈",
 *       description: "이 퀴즈를 다 푸신 분께는 추첨을 통해 근사한 경품을 드립니다. 마니마니 참여해 주세요.",
 *       isTemplate: false,
 *       option: {
 *         __typename: "ComponentActivityQuizOption",
 *         shareResult: true
 *       }
 *       questions: [],
 *       # 퀴즈 정답 목록
 *       answers: [
 *       {
 *         __typename: "ComponentPostSingleChoiceAnswer",
 *         selection: {
 *           __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 3,
 *           value: 55,
 *         }
 *         key: "1"    # 문제 번호
 *       },
 *       {
 *         __typename: "ComponentPostMultipleChoiceAnswer",
 *         __component: "post.multiple-choice-answer",
 *         selection: [
 *         {
 *           __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 1,
 *           value: 18
 *         },
 *       {
 *             __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 2,
 *           value: 810
 *         },
 *         {
 *           __typename: "ComponentPostSelection",
 *           __component: "post.selection",
 *           sequence: 3,
 *           value: 432
 *         } ],
 *         key: "2"  # 문제 번호
 *       } ],
 *       activity: 4,
 *       template: null
 *     }
 *   } ) {
 *     quiz {
 *       ...quizFields
 *     }
 *   }
 * }
 */
export type QuizQuestionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QuizConnection = {
  __typename?: 'QuizConnection';
  values?: Maybe<Array<Maybe<Quiz>>>;
  groupBy?: Maybe<QuizGroupBy>;
  aggregate?: Maybe<QuizAggregator>;
};

export type QuizAggregator = {
  __typename?: 'QuizAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type QuizGroupBy = {
  __typename?: 'QuizGroupBy';
  id?: Maybe<Array<Maybe<QuizConnectionId>>>;
  _id?: Maybe<Array<Maybe<QuizConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<QuizConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<QuizConnectionUpdatedAt>>>;
  isTemplate?: Maybe<Array<Maybe<QuizConnectionIsTemplate>>>;
  activity?: Maybe<Array<Maybe<QuizConnectionActivity>>>;
  workspace?: Maybe<Array<Maybe<QuizConnectionWorkspace>>>;
  template?: Maybe<Array<Maybe<QuizConnectionTemplate>>>;
  creator?: Maybe<Array<Maybe<QuizConnectionCreator>>>;
};

export type QuizConnectionId = {
  __typename?: 'QuizConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnection_Id = {
  __typename?: 'QuizConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnectionCreatedAt = {
  __typename?: 'QuizConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnectionUpdatedAt = {
  __typename?: 'QuizConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnectionIsTemplate = {
  __typename?: 'QuizConnectionIsTemplate';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnectionActivity = {
  __typename?: 'QuizConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnectionWorkspace = {
  __typename?: 'QuizConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnectionTemplate = {
  __typename?: 'QuizConnectionTemplate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizConnectionCreator = {
  __typename?: 'QuizConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<QuizConnection>;
};

export type QuizInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['QuizOptionDynamicZoneInput']>;
  answers?: Maybe<Array<Scalars['QuizAnswersDynamicZoneInput']>>;
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
  tier?: Maybe<Array<Maybe<ComponentActivityTierInput>>>;
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditQuizInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['QuizOptionDynamicZoneInput']>;
  answers?: Maybe<Array<Scalars['QuizAnswersDynamicZoneInput']>>;
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
  tier?: Maybe<Array<Maybe<EditComponentActivityTierInput>>>;
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateQuizInput = {
  data?: Maybe<QuizInput>;
};

export type CreateQuizPayload = {
  __typename?: 'createQuizPayload';
  quiz?: Maybe<Quiz>;
};

export type UpdateQuizInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditQuizInput>;
};

export type UpdateQuizPayload = {
  __typename?: 'updateQuizPayload';
  quiz?: Maybe<Quiz>;
};

export type DeleteQuizInput = {
  where?: Maybe<InputId>;
};

export type DeleteQuizPayload = {
  __typename?: 'deleteQuizPayload';
  quiz?: Maybe<Quiz>;
};

/** 복구 정보 저장 */
export type Recovery = {
  __typename?: 'Recovery';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  address: Scalars['String'];
  encryptedData?: Maybe<Scalars['String']>;
};

export type RecoveryConnection = {
  __typename?: 'RecoveryConnection';
  values?: Maybe<Array<Maybe<Recovery>>>;
  groupBy?: Maybe<RecoveryGroupBy>;
  aggregate?: Maybe<RecoveryAggregator>;
};

export type RecoveryAggregator = {
  __typename?: 'RecoveryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RecoveryGroupBy = {
  __typename?: 'RecoveryGroupBy';
  id?: Maybe<Array<Maybe<RecoveryConnectionId>>>;
  _id?: Maybe<Array<Maybe<RecoveryConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<RecoveryConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<RecoveryConnectionUpdatedAt>>>;
  address?: Maybe<Array<Maybe<RecoveryConnectionAddress>>>;
  encryptedData?: Maybe<Array<Maybe<RecoveryConnectionEncryptedData>>>;
};

export type RecoveryConnectionId = {
  __typename?: 'RecoveryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecoveryConnection>;
};

export type RecoveryConnection_Id = {
  __typename?: 'RecoveryConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecoveryConnection>;
};

export type RecoveryConnectionCreatedAt = {
  __typename?: 'RecoveryConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RecoveryConnection>;
};

export type RecoveryConnectionUpdatedAt = {
  __typename?: 'RecoveryConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RecoveryConnection>;
};

export type RecoveryConnectionAddress = {
  __typename?: 'RecoveryConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecoveryConnection>;
};

export type RecoveryConnectionEncryptedData = {
  __typename?: 'RecoveryConnectionEncryptedData';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecoveryConnection>;
};

export type RecoveryInput = {
  address: Scalars['String'];
  encryptedData?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRecoveryInput = {
  address?: Maybe<Scalars['String']>;
  encryptedData?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRecoveryInput = {
  data?: Maybe<RecoveryInput>;
};

export type CreateRecoveryPayload = {
  __typename?: 'createRecoveryPayload';
  recovery?: Maybe<Recovery>;
};

export type UpdateRecoveryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRecoveryInput>;
};

export type UpdateRecoveryPayload = {
  __typename?: 'updateRecoveryPayload';
  recovery?: Maybe<Recovery>;
};

export type DeleteRecoveryInput = {
  where?: Maybe<InputId>;
};

export type DeleteRecoveryPayload = {
  __typename?: 'deleteRecoveryPayload';
  recovery?: Maybe<Recovery>;
};

export type SurveyOptionDynamicZone = ComponentActivitySurveyOption | ComponentActivityTemplateOption;


/**
 * 액티비티를 구성하는 내용 중 설문조사 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 설문조사 양식 뿐만 아니라 여러 설문조사에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능.
 *
 * ## Mutation 작성 방법:
 * mutation {
 *   createSurvey (input:
 *     {
 *       data: {
 *         title: "서비스 만족도 조사",
 *         description: "디포라 서비스에 대한 사용자 여러분의 만족도에 대한 설문조사입니다. 귀하의 소중한 의견을 반영하여 더욱 향상된 서비스 제공하고자 하오니 적극적인 참여 부탁드립니다.",
 *         isTemplate: true,
 *         option: {
 *           __typename: "ComponentActivityTemplateOption",
 *           scope: SYSTEM,
 *           availableIn: ""
 *         },
 *         questions: []
 *         activity: null,
 *         template: null,
 *         workspace: 1
 *       }
 *     }
 *   )
 *   {
 *     survey {
 *       ...surveyFields
 *     }
 *   }
 * }
 *
 * #참고: 위에서 사용한 surveyFields fragment는 아래와 같다.
 * fragment surveyFields on Survey {
 *   id
 *   title
 *   description
 *   option {
 *     ... on ComponentActivitySurveyOption {
 *       resubmit
 *     }
 *     ... on ComponentActivityTemplateOption {
 *       scope
 *       availableIn
 *     }
 *   }
 *   questions {
 *     ...questionFields
 *   }
 *   workspace {
 *     id
 *   }
 *   activity {
 *     id
 *   }
 * }
 *
 * fragment questionFields on Question {
 *   id
 *   type
 *   title
 *   description
 *   content {
 *     ... on ComponentActivityScaleOption {
 *       type
 *       min
 *       max
 *       customLabel {
 *         key
 *         label
 *       }
 *     }
 *     ... on ComponentActivityTextOption {
 *       characterLimit
 *     }
 *     ... on ComponentActivityChoiceOptionList {
 *       item {
 *         sequence
 *         label
 *         text
 *         image {
 *           url
 *         }
 *         value
 *       }
 *     }
 *   }
 *   tags
 * }
 */
export type Survey = {
  __typename?: 'Survey';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isTemplate: Scalars['Boolean'];
  option: Array<Maybe<SurveyOptionDynamicZone>>;
  activity?: Maybe<Activity>;
  workspace?: Maybe<Workspace>;
  template?: Maybe<Survey>;
  creator?: Maybe<Member>;
  questions?: Maybe<Array<Maybe<Question>>>;
};


/**
 * 액티비티를 구성하는 내용 중 설문조사 양식에 대한 내용만 따로 저장. 실제 액티비티로 만들어지는 설문조사 양식 뿐만 아니라 여러 설문조사에 공통으로 사용할 수 있게 만든 템플릿도 저장 가능.
 *
 * ## Mutation 작성 방법:
 * mutation {
 *   createSurvey (input:
 *     {
 *       data: {
 *         title: "서비스 만족도 조사",
 *         description: "디포라 서비스에 대한 사용자 여러분의 만족도에 대한 설문조사입니다. 귀하의 소중한 의견을 반영하여 더욱 향상된 서비스 제공하고자 하오니 적극적인 참여 부탁드립니다.",
 *         isTemplate: true,
 *         option: {
 *           __typename: "ComponentActivityTemplateOption",
 *           scope: SYSTEM,
 *           availableIn: ""
 *         },
 *         questions: []
 *         activity: null,
 *         template: null,
 *         workspace: 1
 *       }
 *     }
 *   )
 *   {
 *     survey {
 *       ...surveyFields
 *     }
 *   }
 * }
 *
 * #참고: 위에서 사용한 surveyFields fragment는 아래와 같다.
 * fragment surveyFields on Survey {
 *   id
 *   title
 *   description
 *   option {
 *     ... on ComponentActivitySurveyOption {
 *       resubmit
 *     }
 *     ... on ComponentActivityTemplateOption {
 *       scope
 *       availableIn
 *     }
 *   }
 *   questions {
 *     ...questionFields
 *   }
 *   workspace {
 *     id
 *   }
 *   activity {
 *     id
 *   }
 * }
 *
 * fragment questionFields on Question {
 *   id
 *   type
 *   title
 *   description
 *   content {
 *     ... on ComponentActivityScaleOption {
 *       type
 *       min
 *       max
 *       customLabel {
 *         key
 *         label
 *       }
 *     }
 *     ... on ComponentActivityTextOption {
 *       characterLimit
 *     }
 *     ... on ComponentActivityChoiceOptionList {
 *       item {
 *         sequence
 *         label
 *         text
 *         image {
 *           url
 *         }
 *         value
 *       }
 *     }
 *   }
 *   tags
 * }
 */
export type SurveyQuestionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SurveyConnection = {
  __typename?: 'SurveyConnection';
  values?: Maybe<Array<Maybe<Survey>>>;
  groupBy?: Maybe<SurveyGroupBy>;
  aggregate?: Maybe<SurveyAggregator>;
};

export type SurveyAggregator = {
  __typename?: 'SurveyAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SurveyGroupBy = {
  __typename?: 'SurveyGroupBy';
  id?: Maybe<Array<Maybe<SurveyConnectionId>>>;
  _id?: Maybe<Array<Maybe<SurveyConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SurveyConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SurveyConnectionUpdatedAt>>>;
  isTemplate?: Maybe<Array<Maybe<SurveyConnectionIsTemplate>>>;
  activity?: Maybe<Array<Maybe<SurveyConnectionActivity>>>;
  workspace?: Maybe<Array<Maybe<SurveyConnectionWorkspace>>>;
  template?: Maybe<Array<Maybe<SurveyConnectionTemplate>>>;
  creator?: Maybe<Array<Maybe<SurveyConnectionCreator>>>;
};

export type SurveyConnectionId = {
  __typename?: 'SurveyConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnection_Id = {
  __typename?: 'SurveyConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnectionCreatedAt = {
  __typename?: 'SurveyConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnectionUpdatedAt = {
  __typename?: 'SurveyConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnectionIsTemplate = {
  __typename?: 'SurveyConnectionIsTemplate';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnectionActivity = {
  __typename?: 'SurveyConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnectionWorkspace = {
  __typename?: 'SurveyConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnectionTemplate = {
  __typename?: 'SurveyConnectionTemplate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyConnectionCreator = {
  __typename?: 'SurveyConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SurveyConnection>;
};

export type SurveyInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['SurveyOptionDynamicZoneInput']>;
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSurveyInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  option: Array<Scalars['SurveyOptionDynamicZoneInput']>;
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activity?: Maybe<Scalars['ID']>;
  workspace?: Maybe<Scalars['ID']>;
  template?: Maybe<Scalars['ID']>;
  creator?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateSurveyInput = {
  data?: Maybe<SurveyInput>;
};

export type CreateSurveyPayload = {
  __typename?: 'createSurveyPayload';
  survey?: Maybe<Survey>;
};

export type UpdateSurveyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSurveyInput>;
};

export type UpdateSurveyPayload = {
  __typename?: 'updateSurveyPayload';
  survey?: Maybe<Survey>;
};

export type DeleteSurveyInput = {
  where?: Maybe<InputId>;
};

export type DeleteSurveyPayload = {
  __typename?: 'deleteSurveyPayload';
  survey?: Maybe<Survey>;
};

export type Trails = {
  __typename?: 'Trails';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  category?: Maybe<Scalars['String']>;
  categorySub?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  detailInfo?: Maybe<Scalars['JSON']>;
  workspace?: Maybe<Workspace>;
  activity?: Maybe<Activity>;
  post?: Maybe<Post>;
  group?: Maybe<Group>;
  key?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TrailsConnection = {
  __typename?: 'TrailsConnection';
  values?: Maybe<Array<Maybe<Trails>>>;
  groupBy?: Maybe<TrailsGroupBy>;
  aggregate?: Maybe<TrailsAggregator>;
};

export type TrailsAggregator = {
  __typename?: 'TrailsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TrailsGroupBy = {
  __typename?: 'TrailsGroupBy';
  id?: Maybe<Array<Maybe<TrailsConnectionId>>>;
  _id?: Maybe<Array<Maybe<TrailsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TrailsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TrailsConnectionUpdatedAt>>>;
  category?: Maybe<Array<Maybe<TrailsConnectionCategory>>>;
  categorySub?: Maybe<Array<Maybe<TrailsConnectionCategorySub>>>;
  action?: Maybe<Array<Maybe<TrailsConnectionAction>>>;
  date?: Maybe<Array<Maybe<TrailsConnectionDate>>>;
  user?: Maybe<Array<Maybe<TrailsConnectionUser>>>;
  target?: Maybe<Array<Maybe<TrailsConnectionTarget>>>;
  detailInfo?: Maybe<Array<Maybe<TrailsConnectionDetailInfo>>>;
  workspace?: Maybe<Array<Maybe<TrailsConnectionWorkspace>>>;
  activity?: Maybe<Array<Maybe<TrailsConnectionActivity>>>;
  post?: Maybe<Array<Maybe<TrailsConnectionPost>>>;
  group?: Maybe<Array<Maybe<TrailsConnectionGroup>>>;
  key?: Maybe<Array<Maybe<TrailsConnectionKey>>>;
  published_at?: Maybe<Array<Maybe<TrailsConnectionPublished_At>>>;
};

export type TrailsConnectionId = {
  __typename?: 'TrailsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnection_Id = {
  __typename?: 'TrailsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionCreatedAt = {
  __typename?: 'TrailsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionUpdatedAt = {
  __typename?: 'TrailsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionCategory = {
  __typename?: 'TrailsConnectionCategory';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionCategorySub = {
  __typename?: 'TrailsConnectionCategorySub';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionAction = {
  __typename?: 'TrailsConnectionAction';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionDate = {
  __typename?: 'TrailsConnectionDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionUser = {
  __typename?: 'TrailsConnectionUser';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionTarget = {
  __typename?: 'TrailsConnectionTarget';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionDetailInfo = {
  __typename?: 'TrailsConnectionDetailInfo';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionWorkspace = {
  __typename?: 'TrailsConnectionWorkspace';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionActivity = {
  __typename?: 'TrailsConnectionActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionPost = {
  __typename?: 'TrailsConnectionPost';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionGroup = {
  __typename?: 'TrailsConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionKey = {
  __typename?: 'TrailsConnectionKey';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailsConnectionPublished_At = {
  __typename?: 'TrailsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TrailsConnection>;
};

export type TrailInput = {
  category?: Maybe<Scalars['String']>;
  categorySub?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  detailInfo?: Maybe<Scalars['JSON']>;
  workspace?: Maybe<Scalars['ID']>;
  activity?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTrailInput = {
  category?: Maybe<Scalars['String']>;
  categorySub?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  detailInfo?: Maybe<Scalars['JSON']>;
  workspace?: Maybe<Scalars['ID']>;
  activity?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTrailInput = {
  data?: Maybe<TrailInput>;
};

export type CreateTrailPayload = {
  __typename?: 'createTrailPayload';
  trail?: Maybe<Trails>;
};

export type UpdateTrailInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTrailInput>;
};

export type UpdateTrailPayload = {
  __typename?: 'updateTrailPayload';
  trail?: Maybe<Trails>;
};

export type DeleteTrailInput = {
  where?: Maybe<InputId>;
};

export type DeleteTrailPayload = {
  __typename?: 'deleteTrailPayload';
  trail?: Maybe<Trails>;
};

export enum Enum_Transaction_Transactiontype {
  Reward = 'REWARD',
  Transfer = 'TRANSFER',
  Purchase = 'PURCHASE'
}

export enum Enum_Transaction_Transactionstatus {
  Pending = 'PENDING',
  Verified = 'VERIFIED',
  Canceled = 'CANCELED'
}

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  senderAddress: Scalars['String'];
  receiverAddress: Scalars['String'];
  transactionType?: Maybe<Enum_Transaction_Transactiontype>;
  transactionDate?: Maybe<Scalars['DateTime']>;
  settlementDate?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  transactionStatus?: Maybe<Enum_Transaction_Transactionstatus>;
  referenceActivity?: Maybe<Activity>;
  referencePurchase?: Maybe<PointPurchase>;
};

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  values?: Maybe<Array<Maybe<Transaction>>>;
  groupBy?: Maybe<TransactionGroupBy>;
  aggregate?: Maybe<TransactionAggregator>;
};

export type TransactionAggregator = {
  __typename?: 'TransactionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<TransactionAggregatorSum>;
  avg?: Maybe<TransactionAggregatorAvg>;
  min?: Maybe<TransactionAggregatorMin>;
  max?: Maybe<TransactionAggregatorMax>;
};

export type TransactionAggregatorSum = {
  __typename?: 'TransactionAggregatorSum';
  amount?: Maybe<Scalars['Float']>;
};

export type TransactionAggregatorAvg = {
  __typename?: 'TransactionAggregatorAvg';
  amount?: Maybe<Scalars['Float']>;
};

export type TransactionAggregatorMin = {
  __typename?: 'TransactionAggregatorMin';
  amount?: Maybe<Scalars['Float']>;
};

export type TransactionAggregatorMax = {
  __typename?: 'TransactionAggregatorMax';
  amount?: Maybe<Scalars['Float']>;
};

export type TransactionGroupBy = {
  __typename?: 'TransactionGroupBy';
  id?: Maybe<Array<Maybe<TransactionConnectionId>>>;
  _id?: Maybe<Array<Maybe<TransactionConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TransactionConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TransactionConnectionUpdatedAt>>>;
  senderAddress?: Maybe<Array<Maybe<TransactionConnectionSenderAddress>>>;
  receiverAddress?: Maybe<Array<Maybe<TransactionConnectionReceiverAddress>>>;
  transactionType?: Maybe<Array<Maybe<TransactionConnectionTransactionType>>>;
  transactionDate?: Maybe<Array<Maybe<TransactionConnectionTransactionDate>>>;
  settlementDate?: Maybe<Array<Maybe<TransactionConnectionSettlementDate>>>;
  amount?: Maybe<Array<Maybe<TransactionConnectionAmount>>>;
  transactionStatus?: Maybe<Array<Maybe<TransactionConnectionTransactionStatus>>>;
  referenceActivity?: Maybe<Array<Maybe<TransactionConnectionReferenceActivity>>>;
  referencePurchase?: Maybe<Array<Maybe<TransactionConnectionReferencePurchase>>>;
};

export type TransactionConnectionId = {
  __typename?: 'TransactionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnection_Id = {
  __typename?: 'TransactionConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionCreatedAt = {
  __typename?: 'TransactionConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionUpdatedAt = {
  __typename?: 'TransactionConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionSenderAddress = {
  __typename?: 'TransactionConnectionSenderAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionReceiverAddress = {
  __typename?: 'TransactionConnectionReceiverAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionTransactionType = {
  __typename?: 'TransactionConnectionTransactionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionTransactionDate = {
  __typename?: 'TransactionConnectionTransactionDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionSettlementDate = {
  __typename?: 'TransactionConnectionSettlementDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionAmount = {
  __typename?: 'TransactionConnectionAmount';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionTransactionStatus = {
  __typename?: 'TransactionConnectionTransactionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionReferenceActivity = {
  __typename?: 'TransactionConnectionReferenceActivity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionConnectionReferencePurchase = {
  __typename?: 'TransactionConnectionReferencePurchase';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TransactionConnection>;
};

export type TransactionInput = {
  senderAddress: Scalars['String'];
  receiverAddress: Scalars['String'];
  transactionType?: Maybe<Enum_Transaction_Transactiontype>;
  transactionDate?: Maybe<Scalars['DateTime']>;
  settlementDate?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  transactionStatus?: Maybe<Enum_Transaction_Transactionstatus>;
  referenceActivity?: Maybe<Scalars['ID']>;
  referencePurchase?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTransactionInput = {
  senderAddress?: Maybe<Scalars['String']>;
  receiverAddress?: Maybe<Scalars['String']>;
  transactionType?: Maybe<Enum_Transaction_Transactiontype>;
  transactionDate?: Maybe<Scalars['DateTime']>;
  settlementDate?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  transactionStatus?: Maybe<Enum_Transaction_Transactionstatus>;
  referenceActivity?: Maybe<Scalars['ID']>;
  referencePurchase?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTransactionInput = {
  data?: Maybe<TransactionInput>;
};

export type CreateTransactionPayload = {
  __typename?: 'createTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type UpdateTransactionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTransactionInput>;
};

export type UpdateTransactionPayload = {
  __typename?: 'updateTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export type DeleteTransactionInput = {
  where?: Maybe<InputId>;
};

export type DeleteTransactionPayload = {
  __typename?: 'deleteTransactionPayload';
  transaction?: Maybe<Transaction>;
};

export enum Enum_Workspace_Subscriptionplan {
  Standard = 'STANDARD',
  Trial = 'TRIAL',
  Academic = 'ACADEMIC',
  Enterprise = 'ENTERPRISE',
  Basic = 'BASIC',
  Partner = 'PARTNER'
}

export enum Enum_Workspace_Status {
  New = 'NEW',
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  Inactive = 'INACTIVE',
  Deleted = 'DELETED'
}

/** 디포라 서비스를 이용하는 단체를 나타내는 컬렉션 타입입니다. 웍스페이스는 하나의 회사 또는 공동체에 해당합니다. */
export type Workspace = {
  __typename?: 'Workspace';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  isEncrypted: Scalars['Boolean'];
  encryptionKey?: Maybe<Scalars['String']>;
  subscriptionPlan?: Maybe<Enum_Workspace_Subscriptionplan>;
  status?: Maybe<Enum_Workspace_Status>;
  description?: Maybe<Scalars['String']>;
  creator?: Maybe<Member>;
  avatar?: Maybe<UploadFile>;
  workspaceKey?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Group>>>;
  roles?: Maybe<Array<Maybe<MemberRole>>>;
  boards?: Maybe<Array<Maybe<Board>>>;
};


/** 디포라 서비스를 이용하는 단체를 나타내는 컬렉션 타입입니다. 웍스페이스는 하나의 회사 또는 공동체에 해당합니다. */
export type WorkspaceGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


/** 디포라 서비스를 이용하는 단체를 나타내는 컬렉션 타입입니다. 웍스페이스는 하나의 회사 또는 공동체에 해당합니다. */
export type WorkspaceRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


/** 디포라 서비스를 이용하는 단체를 나타내는 컬렉션 타입입니다. 웍스페이스는 하나의 회사 또는 공동체에 해당합니다. */
export type WorkspaceBoardsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type WorkspaceConnection = {
  __typename?: 'WorkspaceConnection';
  values?: Maybe<Array<Maybe<Workspace>>>;
  groupBy?: Maybe<WorkspaceGroupBy>;
  aggregate?: Maybe<WorkspaceAggregator>;
};

export type WorkspaceAggregator = {
  __typename?: 'WorkspaceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<WorkspaceAggregatorSum>;
  avg?: Maybe<WorkspaceAggregatorAvg>;
  min?: Maybe<WorkspaceAggregatorMin>;
  max?: Maybe<WorkspaceAggregatorMax>;
};

export type WorkspaceAggregatorSum = {
  __typename?: 'WorkspaceAggregatorSum';
  balance?: Maybe<Scalars['Float']>;
};

export type WorkspaceAggregatorAvg = {
  __typename?: 'WorkspaceAggregatorAvg';
  balance?: Maybe<Scalars['Float']>;
};

export type WorkspaceAggregatorMin = {
  __typename?: 'WorkspaceAggregatorMin';
  balance?: Maybe<Scalars['Float']>;
};

export type WorkspaceAggregatorMax = {
  __typename?: 'WorkspaceAggregatorMax';
  balance?: Maybe<Scalars['Float']>;
};

export type WorkspaceGroupBy = {
  __typename?: 'WorkspaceGroupBy';
  id?: Maybe<Array<Maybe<WorkspaceConnectionId>>>;
  _id?: Maybe<Array<Maybe<WorkspaceConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<WorkspaceConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<WorkspaceConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<WorkspaceConnectionName>>>;
  address?: Maybe<Array<Maybe<WorkspaceConnectionAddress>>>;
  balance?: Maybe<Array<Maybe<WorkspaceConnectionBalance>>>;
  isEncrypted?: Maybe<Array<Maybe<WorkspaceConnectionIsEncrypted>>>;
  encryptionKey?: Maybe<Array<Maybe<WorkspaceConnectionEncryptionKey>>>;
  subscriptionPlan?: Maybe<Array<Maybe<WorkspaceConnectionSubscriptionPlan>>>;
  status?: Maybe<Array<Maybe<WorkspaceConnectionStatus>>>;
  description?: Maybe<Array<Maybe<WorkspaceConnectionDescription>>>;
  creator?: Maybe<Array<Maybe<WorkspaceConnectionCreator>>>;
  avatar?: Maybe<Array<Maybe<WorkspaceConnectionAvatar>>>;
  workspaceKey?: Maybe<Array<Maybe<WorkspaceConnectionWorkspaceKey>>>;
};

export type WorkspaceConnectionId = {
  __typename?: 'WorkspaceConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnection_Id = {
  __typename?: 'WorkspaceConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionCreatedAt = {
  __typename?: 'WorkspaceConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionUpdatedAt = {
  __typename?: 'WorkspaceConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionName = {
  __typename?: 'WorkspaceConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionAddress = {
  __typename?: 'WorkspaceConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionBalance = {
  __typename?: 'WorkspaceConnectionBalance';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionIsEncrypted = {
  __typename?: 'WorkspaceConnectionIsEncrypted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionEncryptionKey = {
  __typename?: 'WorkspaceConnectionEncryptionKey';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionSubscriptionPlan = {
  __typename?: 'WorkspaceConnectionSubscriptionPlan';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionStatus = {
  __typename?: 'WorkspaceConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionDescription = {
  __typename?: 'WorkspaceConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionCreator = {
  __typename?: 'WorkspaceConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionAvatar = {
  __typename?: 'WorkspaceConnectionAvatar';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceConnectionWorkspaceKey = {
  __typename?: 'WorkspaceConnectionWorkspaceKey';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WorkspaceConnection>;
};

export type WorkspaceInput = {
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  isEncrypted?: Maybe<Scalars['Boolean']>;
  encryptionKey?: Maybe<Scalars['String']>;
  subscriptionPlan?: Maybe<Enum_Workspace_Subscriptionplan>;
  status?: Maybe<Enum_Workspace_Status>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  avatar?: Maybe<Scalars['ID']>;
  boards?: Maybe<Array<Maybe<Scalars['ID']>>>;
  workspaceKey?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditWorkspaceInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  isEncrypted?: Maybe<Scalars['Boolean']>;
  encryptionKey?: Maybe<Scalars['String']>;
  subscriptionPlan?: Maybe<Enum_Workspace_Subscriptionplan>;
  status?: Maybe<Enum_Workspace_Status>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['ID']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  avatar?: Maybe<Scalars['ID']>;
  boards?: Maybe<Array<Maybe<Scalars['ID']>>>;
  workspaceKey?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateWorkspaceInput = {
  data?: Maybe<WorkspaceInput>;
};

export type CreateWorkspacePayload = {
  __typename?: 'createWorkspacePayload';
  workspace?: Maybe<Workspace>;
};

export type UpdateWorkspaceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditWorkspaceInput>;
};

export type UpdateWorkspacePayload = {
  __typename?: 'updateWorkspacePayload';
  workspace?: Maybe<Workspace>;
};

export type DeleteWorkspaceInput = {
  where?: Maybe<InputId>;
};

export type DeleteWorkspacePayload = {
  __typename?: 'deleteWorkspacePayload';
  workspace?: Maybe<Workspace>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  member?: Maybe<Member>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  member?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMember>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionMember = {
  __typename?: 'UsersPermissionsUserConnectionMember';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  member?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  member?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

/**
 * 한 개의 객관식 문제에 포함된 여러 선택지(보기 또는 옵션) 목록.
 * 예시)
 * "가장 좋아하는 음식 하나를 다음 네 가지 중에서 고르세요."
 * 가. 피자	나. 짜장	다. 김치볶음밥	라. 된장찌개
 *
 * 위 문제에서 보기는 [가, 나, 다, 라]의 네 개이다. ChoiceOptionList는 그 네 개의 보기를 포함하며 각 보기 하나 하나는 ChoiceOption 컴포넌트로 정의된다.
 */
export type ComponentActivityChoiceOptionList = {
  __typename?: 'ComponentActivityChoiceOptionList';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  item?: Maybe<Array<Maybe<ComponentActivityChoiceOption>>>;
};

export type ComponentActivityChoiceOptionListInput = {
  item?: Maybe<Array<Maybe<ComponentActivityChoiceOptionInput>>>;
};

export type EditComponentActivityChoiceOptionListInput = {
  id?: Maybe<Scalars['ID']>;
  item?: Maybe<Array<Maybe<EditComponentActivityChoiceOptionInput>>>;
};

export enum Enum_Componentactivitychoiceoption_Status {
  Open = 'OPEN',
  Deleted = 'DELETED'
}

/**
 * 객관식 문제에서 선택가능한 선택지(보기 또는 옵션) 하나에 해당하는 컴포넌트.
 * 예시)
 * "가장 좋아하는 음식 하나를 다음 네 가지 중에서 고르세요."
 * 가. 피자	나. 짜장	다. 김치볶음밥	라. 된장찌개
 *
 * 위 문제에서  보기는 [가, 나, 다, 라]의 네 개이다.
 * 위 예에서, '가', '나', '다', '라'는 ChoiceOption 컴포넌트의 레이블(label) 필드, 이 보기들이 문제 내에서 보여지는 순서는 ChoiceOption 컴포넌트의 순서(sequence) 필드, '피자', '짜장면', '김치볶음밥', '된장찌개' 등의 문구는 텍스트(text) 필드, 마지막으로 사용자가 답안 작성시 선택한 보기에 대해서 전체 집계할 때 그 선택된 보기들을 어떤 숫자값으로 매핑할지는 값(value) 필드에 저장한다.
 * 보기 항목에 이미지를 나타내고자 할 경우, 이미지(image) 필드에 저장한다.
 */
export type ComponentActivityChoiceOption = {
  __typename?: 'ComponentActivityChoiceOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  sequence?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  value?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Componentactivitychoiceoption_Status>;
};

export type ComponentActivityChoiceOptionInput = {
  sequence?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Componentactivitychoiceoption_Status>;
};

export type EditComponentActivityChoiceOptionInput = {
  id?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Componentactivitychoiceoption_Status>;
};

/** 리커트 척도 문제의 보기에 지정하는 사용자 정의 레이블. 기본적으로는 시스템이 제공하는 레이블을 사용할 수 있지만, 시스템과 다른 방식으로 레이블을 붙이고 싶을 때 사용함. 예를 들어, 5점 척도 문제에서 빈도를 묻는 질문에서, 1. 전혀 경험 없음, 2. 한 번 경험, 3. 가끔 경험, 4. 자주 경험, 5. 항상 경험 식의 보기를 주고 싶을 때 사용할 수 있음. 양 끝 자리에만 레이블을 보여주고 다른 눈금 자리에는 보여주지 않으려면 양 끝 자리 레이블만 지정하면 됨. 즉, [ { key: 1, label: "전혀 경험 없음" }, { key: 5, label: "항상 경험" } ] */
export type ComponentActivityCustomLabel = {
  __typename?: 'ComponentActivityCustomLabel';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  key: Scalars['Int'];
  label: Scalars['String'];
};

export type ComponentActivityCustomLabelInput = {
  key: Scalars['Int'];
  label: Scalars['String'];
};

export type EditComponentActivityCustomLabelInput = {
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
};

export type ComponentActivityIdeaBoxOption = {
  __typename?: 'ComponentActivityIdeaBoxOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  numberOfProposals?: Maybe<Scalars['Int']>;
};

export type ComponentActivityIdeaBoxOptionInput = {
  numberOfProposals?: Maybe<Scalars['Int']>;
};

export type EditComponentActivityIdeaBoxOptionInput = {
  id?: Maybe<Scalars['ID']>;
  numberOfProposals?: Maybe<Scalars['Int']>;
};

export type ComponentActivityNumberOfParticipant = {
  __typename?: 'ComponentActivityNumberOfParticipant';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  numberOfParticipant?: Maybe<Scalars['Boolean']>;
};

export type ComponentActivityNumberOfParticipantInput = {
  numberOfParticipant?: Maybe<Scalars['Boolean']>;
};

export type EditComponentActivityNumberOfParticipantInput = {
  id?: Maybe<Scalars['ID']>;
  numberOfParticipant?: Maybe<Scalars['Boolean']>;
};

/** 액티비티에 대한 옵션 중 투표에만 해당하는 추가 설정 옵션 */
export type ComponentActivityPollOption = {
  __typename?: 'ComponentActivityPollOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  isOptionsShuffled?: Maybe<Scalars['Boolean']>;
  isOthersCanAddOptions?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
};

export type ComponentActivityPollOptionInput = {
  isOptionsShuffled?: Maybe<Scalars['Boolean']>;
  isOthersCanAddOptions?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
};

export type EditComponentActivityPollOptionInput = {
  id?: Maybe<Scalars['ID']>;
  isOptionsShuffled?: Maybe<Scalars['Boolean']>;
  isOthersCanAddOptions?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
};

export type ComponentActivityQnaOption = {
  __typename?: 'ComponentActivityQnaOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  isAllowSecretQuestions?: Maybe<Scalars['Boolean']>;
  numOfQuestions?: Maybe<Scalars['Int']>;
};

export type ComponentActivityQnaOptionInput = {
  isAllowSecretQuestions?: Maybe<Scalars['Boolean']>;
  numOfQuestions?: Maybe<Scalars['Int']>;
};

export type EditComponentActivityQnaOptionInput = {
  id?: Maybe<Scalars['ID']>;
  isAllowSecretQuestions?: Maybe<Scalars['Boolean']>;
  numOfQuestions?: Maybe<Scalars['Int']>;
};

/** 액티비티에 대한 옵션 중 퀴즈에만 해당하는 추가 설정 옵션 */
export type ComponentActivityQuizOption = {
  __typename?: 'ComponentActivityQuizOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  isShowNameOnRanking?: Maybe<Scalars['Boolean']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
};

export type ComponentActivityQuizOptionInput = {
  isShowNameOnRanking?: Maybe<Scalars['Boolean']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
};

export type EditComponentActivityQuizOptionInput = {
  id?: Maybe<Scalars['ID']>;
  isShowNameOnRanking?: Maybe<Scalars['Boolean']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
};

export enum Enum_Componentactivityscaleoption_Type {
  DisagreeAgree = 'DISAGREE_AGREE',
  NegativePositive = 'NEGATIVE_POSITIVE',
  NeverAlways = 'NEVER_ALWAYS',
  UnlikelyLikely = 'UNLIKELY_LIKELY',
  HateLike = 'HATE_LIKE',
  Custom = 'CUSTOM'
}

/** 설문 질문 중 리커트 척도 문항에 대해 설정하는 옵션 */
export type ComponentActivityScaleOption = {
  __typename?: 'ComponentActivityScaleOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Enum_Componentactivityscaleoption_Type;
  min?: Maybe<Scalars['Int']>;
  max: Scalars['Int'];
  customLabel?: Maybe<Array<Maybe<ComponentActivityCustomLabel>>>;
};

export type ComponentActivityScaleOptionInput = {
  type: Enum_Componentactivityscaleoption_Type;
  min?: Maybe<Scalars['Int']>;
  max: Scalars['Int'];
  customLabel?: Maybe<Array<Maybe<ComponentActivityCustomLabelInput>>>;
};

export type EditComponentActivityScaleOptionInput = {
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Enum_Componentactivityscaleoption_Type>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  customLabel?: Maybe<Array<Maybe<EditComponentActivityCustomLabelInput>>>;
};

/** 액티비티에 대한 옵션 중 설문에만 해당하는 추가 설정 옵션 */
export type ComponentActivitySurveyOption = {
  __typename?: 'ComponentActivitySurveyOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  isResubmittable?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
};

export type ComponentActivitySurveyOptionInput = {
  isResubmittable?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
};

export type EditComponentActivitySurveyOptionInput = {
  id?: Maybe<Scalars['ID']>;
  isResubmittable?: Maybe<Scalars['Boolean']>;
  isShowResultOnlyToOwner?: Maybe<Scalars['Boolean']>;
};

export enum Enum_Componentactivitytemplateoption_Scope {
  System = 'SYSTEM',
  Workspace = 'WORKSPACE',
  Group = 'GROUP'
}

/** 설문, 투표, 또는 퀴즈에 대한 템플릿인 경우에만 추가적으로 설정하는 옵션 */
export type ComponentActivityTemplateOption = {
  __typename?: 'ComponentActivityTemplateOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  scope: Enum_Componentactivitytemplateoption_Scope;
  availableIn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentActivityTemplateOptionInput = {
  scope?: Maybe<Enum_Componentactivitytemplateoption_Scope>;
  availableIn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentActivityTemplateOptionInput = {
  id?: Maybe<Scalars['ID']>;
  scope?: Maybe<Enum_Componentactivitytemplateoption_Scope>;
  availableIn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** 주관식 문제에 대해 설정하는 옵션 */
export type ComponentActivityTextOption = {
  __typename?: 'ComponentActivityTextOption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  characterLimit?: Maybe<Scalars['Int']>;
};

export type ComponentActivityTextOptionInput = {
  characterLimit?: Maybe<Scalars['Int']>;
};

export type EditComponentActivityTextOptionInput = {
  id?: Maybe<Scalars['ID']>;
  characterLimit?: Maybe<Scalars['Int']>;
};

export type ComponentActivityTier = {
  __typename?: 'ComponentActivityTier';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  scoreFrom?: Maybe<Scalars['Int']>;
  scoreTo?: Maybe<Scalars['Int']>;
};

export type ComponentActivityTierInput = {
  label?: Maybe<Scalars['String']>;
  scoreFrom?: Maybe<Scalars['Int']>;
  scoreTo?: Maybe<Scalars['Int']>;
};

export type EditComponentActivityTierInput = {
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  scoreFrom?: Maybe<Scalars['Int']>;
  scoreTo?: Maybe<Scalars['Int']>;
};

export type ComponentCommonContact = {
  __typename?: 'ComponentCommonContact';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ComponentCommonContactInput = {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type EditComponentCommonContactInput = {
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ComponentCommonRichtextInstruction = {
  __typename?: 'ComponentCommonRichtextInstruction';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
};

export type ComponentCommonRichtextInstructionInput = {
  description?: Maybe<Scalars['String']>;
};

export type EditComponentCommonRichtextInstructionInput = {
  id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export enum Enum_Componentcommonrsvp_Status {
  New = 'NEW',
  Sent = 'SENT',
  Verified = 'VERIFIED',
  Canceled = 'CANCELED',
  Pending = 'PENDING'
}

export enum Enum_Componentcommonrsvp_Type {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type ComponentCommonRsvp = {
  __typename?: 'ComponentCommonRsvp';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  invitationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Componentcommonrsvp_Status>;
  phone?: Maybe<Scalars['String']>;
  member?: Maybe<Member>;
  type?: Maybe<Enum_Componentcommonrsvp_Type>;
};

export type ComponentCommonRsvpInput = {
  email?: Maybe<Scalars['String']>;
  invitationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Componentcommonrsvp_Status>;
  phone?: Maybe<Scalars['String']>;
  member?: Maybe<Scalars['ID']>;
  type?: Maybe<Enum_Componentcommonrsvp_Type>;
};

export type EditComponentCommonRsvpInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  invitationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Componentcommonrsvp_Status>;
  phone?: Maybe<Scalars['String']>;
  member?: Maybe<Scalars['ID']>;
  type?: Maybe<Enum_Componentcommonrsvp_Type>;
};

export type ComponentCommonSimpleInstruction = {
  __typename?: 'ComponentCommonSimpleInstruction';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFile>;
};

export type ComponentCommonSimpleInstructionInput = {
  description?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

export type EditComponentCommonSimpleInstructionInput = {
  id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

export type ComponentFeedCotentContent = {
  __typename?: 'ComponentFeedCotentContent';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  version?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  activityName?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  notionTitle?: Maybe<Scalars['String']>;
  proposalTitle?: Maybe<Scalars['String']>;
  questionTitle?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type ComponentFeedCotentContentInput = {
  version?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  activityName?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  notionTitle?: Maybe<Scalars['String']>;
  proposalTitle?: Maybe<Scalars['String']>;
  questionTitle?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type EditComponentFeedCotentContentInput = {
  id?: Maybe<Scalars['ID']>;
  version?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  activityName?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  notionTitle?: Maybe<Scalars['String']>;
  proposalTitle?: Maybe<Scalars['String']>;
  questionTitle?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export enum Enum_Componenthomepagecompanyevent_Category {
  Market = 'MARKET',
  Technology = 'TECHNOLOGY',
  Management = 'MANAGEMENT',
  Social = 'SOCIAL'
}

export type ComponentHomepageCompanyEvent = {
  __typename?: 'ComponentHomepageCompanyEvent';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  eventDate?: Maybe<Scalars['Date']>;
  category?: Maybe<Enum_Componenthomepagecompanyevent_Category>;
  summary?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['String']>;
  eventDateText?: Maybe<Scalars['String']>;
};

export type ComponentHomepageCompanyEventInput = {
  eventDate?: Maybe<Scalars['Date']>;
  category?: Maybe<Enum_Componenthomepagecompanyevent_Category>;
  summary?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['String']>;
  eventDateText?: Maybe<Scalars['String']>;
};

export type EditComponentHomepageCompanyEventInput = {
  id?: Maybe<Scalars['ID']>;
  eventDate?: Maybe<Scalars['Date']>;
  category?: Maybe<Enum_Componenthomepagecompanyevent_Category>;
  summary?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['String']>;
  eventDateText?: Maybe<Scalars['String']>;
};

export enum Enum_Componentinteractionlike_Type {
  Like = 'LIKE',
  Best = 'BEST',
  Sad = 'SAD',
  Happy = 'HAPPY',
  Angry = 'ANGRY'
}

/** 사용자 반응이 좋아요에 해당하는 경우 추가 저장 정보 */
export type ComponentInteractionLike = {
  __typename?: 'ComponentInteractionLike';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Enum_Componentinteractionlike_Type;
};

export type ComponentInteractionLikeInput = {
  type?: Maybe<Enum_Componentinteractionlike_Type>;
};

export type EditComponentInteractionLikeInput = {
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Enum_Componentinteractionlike_Type>;
};

/** 사용자 반응 중에서 조회(읽음)에 해당하는 경우 추가 저장 정보 */
export type ComponentInteractionRead = {
  __typename?: 'ComponentInteractionRead';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  count?: Maybe<Scalars['Int']>;
};

export type ComponentInteractionReadInput = {
  count?: Maybe<Scalars['Int']>;
};

export type EditComponentInteractionReadInput = {
  id?: Maybe<Scalars['ID']>;
  count?: Maybe<Scalars['Int']>;
};

export enum Enum_Componentinteractionreport_Reason {
  PrivacyViolation = 'PRIVACY_VIOLATION',
  ConfidentialityBreach = 'CONFIDENTIALITY_BREACH',
  Defamation = 'DEFAMATION',
  IllegalContent = 'ILLEGAL_CONTENT',
  FakeInformation = 'FAKE_INFORMATION',
  Other = 'OTHER'
}

/** 신고 사유에 해당하는 컴포넌트 타입 */
export type ComponentInteractionReport = {
  __typename?: 'ComponentInteractionReport';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  reason: Enum_Componentinteractionreport_Reason;
  text?: Maybe<Scalars['String']>;
};

export type ComponentInteractionReportInput = {
  reason: Enum_Componentinteractionreport_Reason;
  text?: Maybe<Scalars['String']>;
};

export type EditComponentInteractionReportInput = {
  id?: Maybe<Scalars['ID']>;
  reason?: Maybe<Enum_Componentinteractionreport_Reason>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentNavigationNavigation = {
  __typename?: 'ComponentNavigationNavigation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  activityId?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  invitationCode?: Maybe<Scalars['Int']>;
};

export type ComponentNavigationNavigationInput = {
  activityId?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  invitationCode?: Maybe<Scalars['Int']>;
};

export type EditComponentNavigationNavigationInput = {
  id?: Maybe<Scalars['ID']>;
  activityId?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  invitationCode?: Maybe<Scalars['Int']>;
};

export type ComponentPostAnswerListAnswerDynamicZone = ComponentPostScaleAnswer | ComponentPostSingleChoiceAnswer | ComponentPostMultipleChoiceAnswer | ComponentPostTextAnswer | ComponentPostShortAnswer;


/** 이 컴포넌트는 컴포넌트에서 dynamic zone을 지원하는지 테스트할 목적으로 만들었다. 모델 JSON 파일에서 dynamic zone 타입 필드를 작성하는 것이 가능하지만 문제는 이렇게 만들어진 컴포넌트 필드에 대한 렌더링 지원이 안 되어 Strapi 프론트엔드에서는 데이터 입력이 불가능하다는 것이다. */
export type ComponentPostAnswerList = {
  __typename?: 'ComponentPostAnswerList';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  answer: Array<Maybe<ComponentPostAnswerListAnswerDynamicZone>>;
};

export type ComponentPostAnswerListInput = {
  answer: Array<Scalars['ComponentPostAnswerListAnswerDynamicZoneInput']>;
};

export type EditComponentPostAnswerListInput = {
  id?: Maybe<Scalars['ID']>;
  answer: Array<Scalars['ComponentPostAnswerListAnswerDynamicZoneInput']>;
};

/** 게시판에 올리는 게시글 */
export type ComponentPostArticle = {
  __typename?: 'ComponentPostArticle';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFile>;
};

export type ComponentPostArticleInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

export type EditComponentPostArticleInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

/** 액티비티에 대한 댓글 */
export type ComponentPostCommentOnActivity = {
  __typename?: 'ComponentPostCommentOnActivity';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFile>;
};

export type ComponentPostCommentOnActivityInput = {
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

export type EditComponentPostCommentOnActivityInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

/** 액티비티 참여 응답(설문, 투표, 퀴즈에 대한 응답, 게시판 게시글, 아이디어 제안 등)에 달리는 댓글 */
export type ComponentPostCommentOnPost = {
  __typename?: 'ComponentPostCommentOnPost';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFile>;
};

export type ComponentPostCommentOnPostInput = {
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

export type EditComponentPostCommentOnPostInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['ID']>;
};

export type ComponentPostItem = {
  __typename?: 'ComponentPostItem';
  id: Scalars['ID'];
  _id: Scalars['ID'];
};

export type ComponentPostItemInput = {
  _?: Maybe<Scalars['String']>;
};

export type EditComponentPostItemInput = {
  id?: Maybe<Scalars['ID']>;
};

/** 객관식 문제에 대한 답. 보기 중에서 여러 개를 고르는 복수선택에 사용됨 */
export type ComponentPostMultipleChoiceAnswer = {
  __typename?: 'ComponentPostMultipleChoiceAnswer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  selection?: Maybe<Array<Maybe<ComponentPostSelection>>>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type ComponentPostMultipleChoiceAnswerInput = {
  selection?: Maybe<Array<Maybe<ComponentPostSelectionInput>>>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type EditComponentPostMultipleChoiceAnswerInput = {
  id?: Maybe<Scalars['ID']>;
  selection?: Maybe<Array<Maybe<EditComponentPostSelectionInput>>>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

/** 아이디어박스 액티비티에 대한 제안(proposal) */
export type ComponentPostProposal = {
  __typename?: 'ComponentPostProposal';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<Maybe<UploadFile>>>;
};


/** 아이디어박스 액티비티에 대한 제안(proposal) */
export type ComponentPostProposalAttachmentArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentPostProposalInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentPostProposalInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ComponentPostQnaQuestion = {
  __typename?: 'ComponentPostQnaQuestion';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentPostQnaQuestionAttachmentArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentPostQnaQuestionInput = {
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentPostQnaQuestionInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 댓글에 달리는 답글 */
export type ComponentPostReply = {
  __typename?: 'ComponentPostReply';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  replyTo?: Maybe<Member>;
  attachment?: Maybe<UploadFile>;
};

export type ComponentPostReplyInput = {
  text?: Maybe<Scalars['String']>;
  replyTo?: Maybe<Scalars['ID']>;
  attachment?: Maybe<Scalars['ID']>;
};

export type EditComponentPostReplyInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  replyTo?: Maybe<Scalars['ID']>;
  attachment?: Maybe<Scalars['ID']>;
};

/** 리커트 척도 유형의 문제에 대한 답 */
export type ComponentPostScaleAnswer = {
  __typename?: 'ComponentPostScaleAnswer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
  question?: Maybe<Question>;
  key?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
};

export type ComponentPostScaleAnswerInput = {
  value?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
};

export type EditComponentPostScaleAnswerInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
};

/** 객관식 문제에 대한 답으로 선택한 보기(옵션) */
export type ComponentPostSelection = {
  __typename?: 'ComponentPostSelection';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
};

export type ComponentPostSelectionInput = {
  value?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
};

export type EditComponentPostSelectionInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
};

/** 주관식 단답형 문제에 대한 답. 서술형의 주관식 문제과 다른 점은 입력값의 길이가 짧고 몇 개의 단어 또는 숫자를 기입한다는 것임. */
export type ComponentPostShortAnswer = {
  __typename?: 'ComponentPostShortAnswer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  text: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type ComponentPostShortAnswerInput = {
  text: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type EditComponentPostShortAnswerInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

/** 객관식 문제에 대한 답. 보기 중에서 하나만 고르는 단수선택에 사용됨 */
export type ComponentPostSingleChoiceAnswer = {
  __typename?: 'ComponentPostSingleChoiceAnswer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  selection?: Maybe<Array<Maybe<ComponentPostSelection>>>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type ComponentPostSingleChoiceAnswerInput = {
  selection?: Maybe<Array<Maybe<ComponentPostSelectionInput>>>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type EditComponentPostSingleChoiceAnswerInput = {
  id?: Maybe<Scalars['ID']>;
  selection?: Maybe<Array<Maybe<EditComponentPostSelectionInput>>>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

/** 주관식에 문제에 대한 답 */
export type ComponentPostTextAnswer = {
  __typename?: 'ComponentPostTextAnswer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type ComponentPostTextAnswerInput = {
  text?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type EditComponentPostTextAnswerInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['ID']>;
  sequence?: Maybe<Scalars['Int']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type ComponentRewardRewardSetting = {
  __typename?: 'ComponentRewardRewardSetting';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentRewardRewardSettingInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentRewardRewardSettingInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum Enum_Componentrewardsettlementinstruction_Paymentmethod {
  Bankwire = 'BANKWIRE',
  DirectPayment = 'DIRECT_PAYMENT',
  CreditCard = 'CREDIT_CARD',
  Voucher = 'VOUCHER',
  Paypal = 'PAYPAL'
}

export type ComponentRewardSettlementInstruction = {
  __typename?: 'ComponentRewardSettlementInstruction';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  accountNumber?: Maybe<Scalars['String']>;
  paymentMethod: Enum_Componentrewardsettlementinstruction_Paymentmethod;
  reference?: Maybe<Scalars['String']>;
};

export type ComponentRewardSettlementInstructionInput = {
  accountNumber?: Maybe<Scalars['String']>;
  paymentMethod: Enum_Componentrewardsettlementinstruction_Paymentmethod;
  reference?: Maybe<Scalars['String']>;
};

export type EditComponentRewardSettlementInstructionInput = {
  id?: Maybe<Scalars['ID']>;
  accountNumber?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Enum_Componentrewardsettlementinstruction_Paymentmethod>;
  reference?: Maybe<Scalars['String']>;
};

export type Morph = SummarizeResponseData | SummarizeResponse | JoinActivityPayload | DeleteEventPayload | GroupAndMemberPayload | MemberRoleInfoResponse | ReportDataType | SubDataType | UpdateStatusPayload | SortedReportsPayload | SendInvitationEmailPayload | InvitationCodeInfoResponse | AdminInvitedPayload | StartQrcodeCommPayload | MessageQrcodeCommPayload | BackupRecoveryPayload | Product | Brand | Category | PurchaseInfo | ProductListResponse | ProductInfo | UserPoints | PurchaseCouponPayload | RefundCouponPayload | PaymentResponsePayload | InitPaymentPayload | JoinWorkSpaceResult | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Activity | ActivityConnection | ActivityAggregator | ActivityAggregatorSum | ActivityAggregatorAvg | ActivityAggregatorMin | ActivityAggregatorMax | ActivityGroupBy | ActivityConnectionId | ActivityConnection_Id | ActivityConnectionCreatedAt | ActivityConnectionUpdatedAt | ActivityConnectionName | ActivityConnectionType | ActivityConnectionDescription | ActivityConnectionIsAnonymous | ActivityConnectionEffectiveDate | ActivityConnectionDeadline | ActivityConnectionRewardOption | ActivityConnectionRewardAllocationAmount | ActivityConnectionRewardPaidAmount | ActivityConnectionStatus | ActivityConnectionIsShowResultAfterDeadline | ActivityConnectionSurvey | ActivityConnectionGroup | ActivityConnectionPoll | ActivityConnectionQuiz | ActivityConnectionWorkspace | ActivityConnectionCreator | ActivityConnectionIdea_Box | ActivityConnectionQna | ActivityConnectionBoard | CreateActivityPayload | UpdateActivityPayload | DeleteActivityPayload | Board | BoardConnection | BoardAggregator | BoardGroupBy | BoardConnectionId | BoardConnection_Id | BoardConnectionCreatedAt | BoardConnectionUpdatedAt | BoardConnectionIsTemplate | BoardConnectionName | BoardConnectionDescription | BoardConnectionWorkspace | BoardConnectionIsAnonymous | BoardConnectionCreator | CreateBoardPayload | UpdateBoardPayload | DeleteBoardPayload | Copyright | UpdateCopyrightPayload | DeleteCopyrightPayload | Customer | CustomerConnection | CustomerAggregator | CustomerGroupBy | CustomerConnectionId | CustomerConnection_Id | CustomerConnectionCreatedAt | CustomerConnectionUpdatedAt | CustomerConnectionName | CustomerConnectionEffectiveDate | CustomerConnectionSubscriptionPlan | CustomerConnectionPaymentFrequency | CustomerConnectionStatus | CreateCustomerPayload | UpdateCustomerPayload | DeleteCustomerPayload | Feeds | FeedsConnection | FeedsAggregator | FeedsGroupBy | FeedsConnectionId | FeedsConnection_Id | FeedsConnectionCreatedAt | FeedsConnectionUpdatedAt | FeedsConnectionTarget | FeedsConnectionType | FeedsConnectionContent | FeedsConnectionNavigation | FeedsConnectionTimestamp | FeedsConnectionIsRead | FeedsConnectionPublished_At | CreateFeedPayload | UpdateFeedPayload | DeleteFeedPayload | Follow | FollowConnection | FollowAggregator | FollowGroupBy | FollowConnectionId | FollowConnection_Id | FollowConnectionCreatedAt | FollowConnectionUpdatedAt | FollowConnectionMember | FollowConnectionTarget | FollowConnectionIsActive | FollowConnectionPublished_At | CreateFollowPayload | UpdateFollowPayload | DeleteFollowPayload | Group | GroupConnection | GroupAggregator | GroupGroupBy | GroupConnectionId | GroupConnection_Id | GroupConnectionCreatedAt | GroupConnectionUpdatedAt | GroupConnectionName | GroupConnectionGroupType | GroupConnectionWorkspace | GroupConnectionCreator | GroupConnectionAttachment | GroupConnectionDescription | GroupConnectionStatus | GroupConnectionTrail | GroupConnectionIsCertified | CreateGroupPayload | UpdateGroupPayload | DeleteGroupPayload | History | UpdateHistoryPayload | DeleteHistoryPayload | Home | UpdateHomePayload | DeleteHomePayload | IdeaBox | IdeaBoxConnection | IdeaBoxAggregator | IdeaBoxGroupBy | IdeaBoxConnectionId | IdeaBoxConnection_Id | IdeaBoxConnectionCreatedAt | IdeaBoxConnectionUpdatedAt | IdeaBoxConnectionIsTemplate | IdeaBoxConnectionActivity | IdeaBoxConnectionWorkspace | IdeaBoxConnectionCreator | CreateIdeaBoxPayload | UpdateIdeaBoxPayload | DeleteIdeaBoxPayload | Interaction | InteractionConnection | InteractionAggregator | InteractionGroupBy | InteractionConnectionId | InteractionConnection_Id | InteractionConnectionCreatedAt | InteractionConnectionUpdatedAt | InteractionConnectionType | InteractionConnectionActivity | InteractionConnectionGroup | InteractionConnectionPost | InteractionConnectionWorkspace | InteractionConnectionActor | CreateInteractionPayload | UpdateInteractionPayload | DeleteInteractionPayload | Invitation | InvitationConnection | InvitationAggregator | InvitationGroupBy | InvitationConnectionId | InvitationConnection_Id | InvitationConnectionCreatedAt | InvitationConnectionUpdatedAt | InvitationConnectionScope | InvitationConnectionSentDate | InvitationConnectionExpiredDate | CreateInvitationPayload | UpdateInvitationPayload | DeleteInvitationPayload | MemberInteraction | MemberInteractionConnection | MemberInteractionAggregator | MemberInteractionAggregatorSum | MemberInteractionAggregatorAvg | MemberInteractionAggregatorMin | MemberInteractionAggregatorMax | MemberInteractionGroupBy | MemberInteractionConnectionId | MemberInteractionConnection_Id | MemberInteractionConnectionCreatedAt | MemberInteractionConnectionUpdatedAt | MemberInteractionConnectionType | MemberInteractionConnectionQuantity | MemberInteractionConnectionReceiver | MemberInteractionConnectionActivity | MemberInteractionConnectionWorkspace | MemberInteractionConnectionActor | CreateMemberInteractionPayload | UpdateMemberInteractionPayload | DeleteMemberInteractionPayload | MemberRole | MemberRoleConnection | MemberRoleAggregator | MemberRoleGroupBy | MemberRoleConnectionId | MemberRoleConnection_Id | MemberRoleConnectionCreatedAt | MemberRoleConnectionUpdatedAt | MemberRoleConnectionType | MemberRoleConnectionScope | MemberRoleConnectionActivity | MemberRoleConnectionGroup | MemberRoleConnectionWorkspace | MemberRoleConnectionMember | MemberRoleConnectionStatus | MemberRoleConnectionUsername | CreateMemberRolePayload | UpdateMemberRolePayload | DeleteMemberRolePayload | Member | MemberConnection | MemberAggregator | MemberAggregatorSum | MemberAggregatorAvg | MemberAggregatorMin | MemberAggregatorMax | MemberGroupBy | MemberConnectionId | MemberConnection_Id | MemberConnectionCreatedAt | MemberConnectionUpdatedAt | MemberConnectionUsername | MemberConnectionUserClass | MemberConnectionAddress | MemberConnectionBalance | MemberConnectionAvatar | MemberConnectionLastAccessTime | MemberConnectionUser | MemberConnectionEmail | CreateMemberPayload | UpdateMemberPayload | DeleteMemberPayload | PointPurchase | PointPurchaseConnection | PointPurchaseAggregator | PointPurchaseAggregatorSum | PointPurchaseAggregatorAvg | PointPurchaseAggregatorMin | PointPurchaseAggregatorMax | PointPurchaseGroupBy | PointPurchaseConnectionId | PointPurchaseConnection_Id | PointPurchaseConnectionCreatedAt | PointPurchaseConnectionUpdatedAt | PointPurchaseConnectionPointAmount | PointPurchaseConnectionCurrencyAmount | PointPurchaseConnectionCurrencyUnit | PointPurchaseConnectionPurchaseDate | PointPurchaseConnectionSettlementInstruction | PointPurchaseConnectionTransaction | CreatePointPurchasePayload | UpdatePointPurchasePayload | DeletePointPurchasePayload | Poll | PollConnection | PollAggregator | PollGroupBy | PollConnectionId | PollConnection_Id | PollConnectionCreatedAt | PollConnectionUpdatedAt | PollConnectionIsTemplate | PollConnectionActivity | PollConnectionTemplate | PollConnectionWorkspace | PollConnectionCreator | CreatePollPayload | UpdatePollPayload | DeletePollPayload | Post | PostConnection | PostAggregator | PostAggregatorSum | PostAggregatorAvg | PostAggregatorMin | PostAggregatorMax | PostGroupBy | PostConnectionId | PostConnection_Id | PostConnectionCreatedAt | PostConnectionUpdatedAt | PostConnectionType | PostConnectionActivity | PostConnectionParentPost | PostConnectionWriter | PostConnectionMyScore | PostConnectionStatus | CreatePostPayload | UpdatePostPayload | DeletePostPayload | Qna | QnaConnection | QnaAggregator | QnaGroupBy | QnaConnectionId | QnaConnection_Id | QnaConnectionCreatedAt | QnaConnectionUpdatedAt | QnaConnectionIsTemplate | QnaConnectionActivity | QnaConnectionWorkspace | QnaConnectionCreator | CreateQnaPayload | UpdateQnaPayload | DeleteQnaPayload | QrcodeComm | QrcodeCommConnection | QrcodeCommAggregator | QrcodeCommAggregatorSum | QrcodeCommAggregatorAvg | QrcodeCommAggregatorMin | QrcodeCommAggregatorMax | QrcodeCommGroupBy | QrcodeCommConnectionId | QrcodeCommConnection_Id | QrcodeCommConnectionCreatedAt | QrcodeCommConnectionUpdatedAt | QrcodeCommConnectionPubKey | QrcodeCommConnectionMessage | QrcodeCommConnectionExpireAt | CreateQrcodeCommPayload | UpdateQrcodeCommPayload | DeleteQrcodeCommPayload | Question | QuestionConnection | QuestionAggregator | QuestionAggregatorSum | QuestionAggregatorAvg | QuestionAggregatorMin | QuestionAggregatorMax | QuestionGroupBy | QuestionConnectionId | QuestionConnection_Id | QuestionConnectionCreatedAt | QuestionConnectionUpdatedAt | QuestionConnectionTitle | QuestionConnectionDescription | QuestionConnectionKey | QuestionConnectionIsRequired | QuestionConnectionType | QuestionConnectionTags | QuestionConnectionSequence | QuestionConnectionPoint | QuestionConnectionSurvey | QuestionConnectionPoll | QuestionConnectionQuiz | QuestionConnectionWorkspace | QuestionConnectionStatus | CreateQuestionPayload | UpdateQuestionPayload | DeleteQuestionPayload | Quiz | QuizConnection | QuizAggregator | QuizGroupBy | QuizConnectionId | QuizConnection_Id | QuizConnectionCreatedAt | QuizConnectionUpdatedAt | QuizConnectionIsTemplate | QuizConnectionActivity | QuizConnectionWorkspace | QuizConnectionTemplate | QuizConnectionCreator | CreateQuizPayload | UpdateQuizPayload | DeleteQuizPayload | Recovery | RecoveryConnection | RecoveryAggregator | RecoveryGroupBy | RecoveryConnectionId | RecoveryConnection_Id | RecoveryConnectionCreatedAt | RecoveryConnectionUpdatedAt | RecoveryConnectionAddress | RecoveryConnectionEncryptedData | CreateRecoveryPayload | UpdateRecoveryPayload | DeleteRecoveryPayload | Survey | SurveyConnection | SurveyAggregator | SurveyGroupBy | SurveyConnectionId | SurveyConnection_Id | SurveyConnectionCreatedAt | SurveyConnectionUpdatedAt | SurveyConnectionIsTemplate | SurveyConnectionActivity | SurveyConnectionWorkspace | SurveyConnectionTemplate | SurveyConnectionCreator | CreateSurveyPayload | UpdateSurveyPayload | DeleteSurveyPayload | Trails | TrailsConnection | TrailsAggregator | TrailsGroupBy | TrailsConnectionId | TrailsConnection_Id | TrailsConnectionCreatedAt | TrailsConnectionUpdatedAt | TrailsConnectionCategory | TrailsConnectionCategorySub | TrailsConnectionAction | TrailsConnectionDate | TrailsConnectionUser | TrailsConnectionTarget | TrailsConnectionDetailInfo | TrailsConnectionWorkspace | TrailsConnectionActivity | TrailsConnectionPost | TrailsConnectionGroup | TrailsConnectionKey | TrailsConnectionPublished_At | CreateTrailPayload | UpdateTrailPayload | DeleteTrailPayload | Transaction | TransactionConnection | TransactionAggregator | TransactionAggregatorSum | TransactionAggregatorAvg | TransactionAggregatorMin | TransactionAggregatorMax | TransactionGroupBy | TransactionConnectionId | TransactionConnection_Id | TransactionConnectionCreatedAt | TransactionConnectionUpdatedAt | TransactionConnectionSenderAddress | TransactionConnectionReceiverAddress | TransactionConnectionTransactionType | TransactionConnectionTransactionDate | TransactionConnectionSettlementDate | TransactionConnectionAmount | TransactionConnectionTransactionStatus | TransactionConnectionReferenceActivity | TransactionConnectionReferencePurchase | CreateTransactionPayload | UpdateTransactionPayload | DeleteTransactionPayload | Workspace | WorkspaceConnection | WorkspaceAggregator | WorkspaceAggregatorSum | WorkspaceAggregatorAvg | WorkspaceAggregatorMin | WorkspaceAggregatorMax | WorkspaceGroupBy | WorkspaceConnectionId | WorkspaceConnection_Id | WorkspaceConnectionCreatedAt | WorkspaceConnectionUpdatedAt | WorkspaceConnectionName | WorkspaceConnectionAddress | WorkspaceConnectionBalance | WorkspaceConnectionIsEncrypted | WorkspaceConnectionEncryptionKey | WorkspaceConnectionSubscriptionPlan | WorkspaceConnectionStatus | WorkspaceConnectionDescription | WorkspaceConnectionCreator | WorkspaceConnectionAvatar | WorkspaceConnectionWorkspaceKey | CreateWorkspacePayload | UpdateWorkspacePayload | DeleteWorkspacePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionMember | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentActivityChoiceOptionList | ComponentActivityChoiceOption | ComponentActivityCustomLabel | ComponentActivityIdeaBoxOption | ComponentActivityNumberOfParticipant | ComponentActivityPollOption | ComponentActivityQnaOption | ComponentActivityQuizOption | ComponentActivityScaleOption | ComponentActivitySurveyOption | ComponentActivityTemplateOption | ComponentActivityTextOption | ComponentActivityTier | ComponentCommonContact | ComponentCommonRichtextInstruction | ComponentCommonRsvp | ComponentCommonSimpleInstruction | ComponentFeedCotentContent | ComponentHomepageCompanyEvent | ComponentInteractionLike | ComponentInteractionRead | ComponentInteractionReport | ComponentNavigationNavigation | ComponentPostAnswerList | ComponentPostArticle | ComponentPostCommentOnActivity | ComponentPostCommentOnPost | ComponentPostItem | ComponentPostMultipleChoiceAnswer | ComponentPostProposal | ComponentPostQnaQuestion | ComponentPostReply | ComponentPostScaleAnswer | ComponentPostSelection | ComponentPostShortAnswer | ComponentPostSingleChoiceAnswer | ComponentPostTextAnswer | ComponentRewardRewardSetting | ComponentRewardSettlementInstruction;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  activity?: Maybe<Activity>;
  activities?: Maybe<Array<Maybe<Activity>>>;
  activitiesConnection?: Maybe<ActivityConnection>;
  board?: Maybe<Board>;
  boards?: Maybe<Array<Maybe<Board>>>;
  boardsConnection?: Maybe<BoardConnection>;
  copyright?: Maybe<Copyright>;
  customer?: Maybe<Customer>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customersConnection?: Maybe<CustomerConnection>;
  feed?: Maybe<Feeds>;
  feeds?: Maybe<Array<Maybe<Feeds>>>;
  feedsConnection?: Maybe<FeedsConnection>;
  follow?: Maybe<Follow>;
  follows?: Maybe<Array<Maybe<Follow>>>;
  followsConnection?: Maybe<FollowConnection>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Maybe<Group>>>;
  groupsConnection?: Maybe<GroupConnection>;
  history?: Maybe<History>;
  home?: Maybe<Home>;
  ideaBox?: Maybe<IdeaBox>;
  ideaBoxes?: Maybe<Array<Maybe<IdeaBox>>>;
  ideaBoxesConnection?: Maybe<IdeaBoxConnection>;
  interaction?: Maybe<Interaction>;
  interactions?: Maybe<Array<Maybe<Interaction>>>;
  interactionsConnection?: Maybe<InteractionConnection>;
  invitation?: Maybe<Invitation>;
  invitations?: Maybe<Array<Maybe<Invitation>>>;
  invitationsConnection?: Maybe<InvitationConnection>;
  memberInteraction?: Maybe<MemberInteraction>;
  memberInteractions?: Maybe<Array<Maybe<MemberInteraction>>>;
  memberInteractionsConnection?: Maybe<MemberInteractionConnection>;
  memberRole?: Maybe<MemberRole>;
  memberRoles?: Maybe<Array<Maybe<MemberRole>>>;
  memberRolesConnection?: Maybe<MemberRoleConnection>;
  member?: Maybe<Member>;
  members?: Maybe<Array<Maybe<Member>>>;
  membersConnection?: Maybe<MemberConnection>;
  pointPurchase?: Maybe<PointPurchase>;
  pointPurchases?: Maybe<Array<Maybe<PointPurchase>>>;
  pointPurchasesConnection?: Maybe<PointPurchaseConnection>;
  poll?: Maybe<Poll>;
  polls?: Maybe<Array<Maybe<Poll>>>;
  pollsConnection?: Maybe<PollConnection>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsConnection?: Maybe<PostConnection>;
  qna?: Maybe<Qna>;
  qnas?: Maybe<Array<Maybe<Qna>>>;
  qnasConnection?: Maybe<QnaConnection>;
  /** @deprecated This query should not be used, using peer */
  qrcodeComm?: Maybe<QrcodeComm>;
  /** @deprecated This query should not be used, using peer */
  qrcodeComms?: Maybe<Array<Maybe<QrcodeComm>>>;
  /** @deprecated This query should not be used, using peer */
  qrcodeCommsConnection?: Maybe<QrcodeCommConnection>;
  question?: Maybe<Question>;
  questions?: Maybe<Array<Maybe<Question>>>;
  questionsConnection?: Maybe<QuestionConnection>;
  quiz?: Maybe<Quiz>;
  quizzes?: Maybe<Array<Maybe<Quiz>>>;
  quizzesConnection?: Maybe<QuizConnection>;
  /** @deprecated This query should not be used, using recoveryRestore instead. */
  recovery?: Maybe<Recovery>;
  /** @deprecated This query should not be used, using recoveryRestore instead. */
  recoveries?: Maybe<Array<Maybe<Recovery>>>;
  /** @deprecated This query should not be used, using recoveryRestore instead. */
  recoveriesConnection?: Maybe<RecoveryConnection>;
  survey?: Maybe<Survey>;
  surveys?: Maybe<Array<Maybe<Survey>>>;
  surveysConnection?: Maybe<SurveyConnection>;
  trail?: Maybe<Trails>;
  trails?: Maybe<Array<Maybe<Trails>>>;
  trailsConnection?: Maybe<TrailsConnection>;
  transaction?: Maybe<Transaction>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  transactionsConnection?: Maybe<TransactionConnection>;
  workspace?: Maybe<Workspace>;
  workspaces?: Maybe<Array<Maybe<Workspace>>>;
  workspacesConnection?: Maybe<WorkspaceConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  summarize?: Maybe<SummarizeResponse>;
  myGroups?: Maybe<Array<Maybe<Group>>>;
  memberRoleInfo?: Maybe<MemberRoleInfoResponse>;
  sortedReports?: Maybe<SortedReportsPayload>;
  invitationCodeInfo?: Maybe<InvitationCodeInfoResponse>;
  rsvp?: Maybe<ComponentCommonRsvp>;
  emailVerficationCheck?: Maybe<Scalars['Boolean']>;
  joinedList?: Maybe<Array<Maybe<MemberRole>>>;
  pendingList?: Maybe<Array<Maybe<ComponentCommonRsvp>>>;
  removedList?: Maybe<Array<Maybe<MemberRole>>>;
  peerQrcodeComm?: Maybe<QrcodeComm>;
  finalQrcodeComm?: Maybe<QrcodeComm>;
  recoveryRestore?: Maybe<Recovery>;
  hello?: Maybe<Scalars['String']>;
  bestProduct?: Maybe<Array<Maybe<Product>>>;
  productList?: Maybe<ProductListResponse>;
  productInfo?: Maybe<ProductInfo>;
  userPoints?: Maybe<UserPoints>;
  brandList?: Maybe<Array<Maybe<Brand>>>;
  categoryList?: Maybe<Array<Maybe<Category>>>;
  purchaseList?: Maybe<Array<Maybe<PurchaseInfo>>>;
  couponInfo?: Maybe<PurchaseInfo>;
  workspaceNameList?: Maybe<Array<Maybe<Scalars['String']>>>;
  userNameList?: Maybe<Array<Maybe<Scalars['String']>>>;
  userEmailList?: Maybe<Array<Maybe<Scalars['String']>>>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryActivityArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryActivitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryActivitiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBoardArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBoardsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBoardsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCopyrightArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCustomersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCustomersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFeedArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryFeedsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFeedsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFollowArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryFollowsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFollowsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGroupsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHistoryArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryHomeArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryIdeaBoxArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryIdeaBoxesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryIdeaBoxesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryInteractionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryInteractionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryInteractionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryInvitationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryInvitationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryInvitationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMemberInteractionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMemberInteractionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMemberInteractionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMemberRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMemberRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMemberRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMemberArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPointPurchaseArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPointPurchasesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPointPurchasesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPollArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPollsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPollsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryQnaArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryQnasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryQnasConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryQrcodeCommArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryQrcodeCommsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryQrcodeCommsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryQuestionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryQuestionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryQuestionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryQuizArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryQuizzesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryQuizzesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRecoveryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRecoveriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRecoveriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySurveyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySurveysArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySurveysConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTrailArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTrailsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTrailsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTransactionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTransactionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWorkspaceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryWorkspacesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryWorkspacesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySummarizeArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryMyGroupsArgs = {
  ids: Array<Maybe<Scalars['String']>>;
};


export type QueryMemberRoleInfoArgs = {
  memberRoleId: Scalars['ID'];
};


export type QuerySortedReportsArgs = {
  input?: Maybe<SortedReportsInput>;
};


export type QueryInvitationCodeInfoArgs = {
  invitationCode?: Maybe<Scalars['String']>;
};


export type QueryRsvpArgs = {
  invitationCode?: Maybe<Scalars['String']>;
};


export type QueryEmailVerficationCheckArgs = {
  email?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['String']>;
};


export type QueryJoinedListArgs = {
  workspaceId: Scalars['String'];
};


export type QueryPendingListArgs = {
  workspaceId: Scalars['String'];
};


export type QueryRemovedListArgs = {
  workspaceId: Scalars['String'];
};


export type QueryPeerQrcodeCommArgs = {
  peer: Scalars['String'];
};


export type QueryFinalQrcodeCommArgs = {
  id: Scalars['ID'];
  final: Scalars['String'];
};


export type QueryRecoveryRestoreArgs = {
  restoreAt?: Maybe<Scalars['DateTime']>;
};


export type QueryProductListArgs = {
  brandId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
};


export type QueryProductInfoArgs = {
  productId: Scalars['String'];
};


export type QueryUserPointsArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryBrandListArgs = {
  categoryId?: Maybe<Scalars['String']>;
};


export type QueryPurchaseListArgs = {
  userId: Scalars['String'];
};


export type QueryCouponInfoArgs = {
  pinNumber: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Activity With Member */
  createActivity?: Maybe<CreateActivityPayload>;
  updateActivity?: Maybe<UpdateActivityPayload>;
  deleteActivity?: Maybe<DeleteActivityPayload>;
  /** Create Board */
  createBoard?: Maybe<CreateBoardPayload>;
  updateBoard?: Maybe<UpdateBoardPayload>;
  deleteBoard?: Maybe<DeleteBoardPayload>;
  updateCopyright?: Maybe<UpdateCopyrightPayload>;
  deleteCopyright?: Maybe<DeleteCopyrightPayload>;
  createCustomer?: Maybe<CreateCustomerPayload>;
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  deleteCustomer?: Maybe<DeleteCustomerPayload>;
  createFeed?: Maybe<CreateFeedPayload>;
  updateFeed?: Maybe<UpdateFeedPayload>;
  deleteFeed?: Maybe<DeleteFeedPayload>;
  /** Link Follow between Member with Target(Workspace, Group, Activity) */
  createFollow?: Maybe<CreateFollowPayload>;
  updateFollow?: Maybe<UpdateFollowPayload>;
  deleteFollow?: Maybe<DeleteFollowPayload>;
  /**
   * Create a new Group
   * @deprecated Please use createDeforaGroup instead
   */
  createGroup?: Maybe<CreateGroupPayload>;
  /**
   * Update an existing Group
   * @deprecated Please use updateDeforaGroup instead
   */
  updateGroup?: Maybe<UpdateGroupPayload>;
  /** Delete an existing Group */
  deleteGroup?: Maybe<DeleteGroupPayload>;
  updateHistory?: Maybe<UpdateHistoryPayload>;
  deleteHistory?: Maybe<DeleteHistoryPayload>;
  updateHome?: Maybe<UpdateHomePayload>;
  deleteHome?: Maybe<DeleteHomePayload>;
  createIdeaBox?: Maybe<CreateIdeaBoxPayload>;
  updateIdeaBox?: Maybe<UpdateIdeaBoxPayload>;
  deleteIdeaBox?: Maybe<DeleteIdeaBoxPayload>;
  createInteraction?: Maybe<CreateInteractionPayload>;
  updateInteraction?: Maybe<UpdateInteractionPayload>;
  deleteInteraction?: Maybe<DeleteInteractionPayload>;
  createInvitation?: Maybe<CreateInvitationPayload>;
  updateInvitation?: Maybe<UpdateInvitationPayload>;
  deleteInvitation?: Maybe<DeleteInvitationPayload>;
  createMemberInteraction?: Maybe<CreateMemberInteractionPayload>;
  updateMemberInteraction?: Maybe<UpdateMemberInteractionPayload>;
  deleteMemberInteraction?: Maybe<DeleteMemberInteractionPayload>;
  createMemberRole?: Maybe<CreateMemberRolePayload>;
  updateMemberRole?: Maybe<UpdateMemberRolePayload>;
  deleteMemberRole?: Maybe<DeleteMemberRolePayload>;
  createMember?: Maybe<CreateMemberPayload>;
  updateMember?: Maybe<UpdateMemberPayload>;
  deleteMember?: Maybe<DeleteMemberPayload>;
  createPointPurchase?: Maybe<CreatePointPurchasePayload>;
  updatePointPurchase?: Maybe<UpdatePointPurchasePayload>;
  deletePointPurchase?: Maybe<DeletePointPurchasePayload>;
  createPoll?: Maybe<CreatePollPayload>;
  updatePoll?: Maybe<UpdatePollPayload>;
  deletePoll?: Maybe<DeletePollPayload>;
  createPost?: Maybe<CreatePostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  createQna?: Maybe<CreateQnaPayload>;
  updateQna?: Maybe<UpdateQnaPayload>;
  deleteQna?: Maybe<DeleteQnaPayload>;
  /** @deprecated This query should not be used, using start */
  createQrcodeComm?: Maybe<CreateQrcodeCommPayload>;
  /** @deprecated This query should not be used, using message */
  updateQrcodeComm?: Maybe<UpdateQrcodeCommPayload>;
  /** @deprecated This query should not be used */
  deleteQrcodeComm?: Maybe<DeleteQrcodeCommPayload>;
  createQuestion?: Maybe<CreateQuestionPayload>;
  updateQuestion?: Maybe<UpdateQuestionPayload>;
  deleteQuestion?: Maybe<DeleteQuestionPayload>;
  createQuiz?: Maybe<CreateQuizPayload>;
  updateQuiz?: Maybe<UpdateQuizPayload>;
  deleteQuiz?: Maybe<DeleteQuizPayload>;
  /**
   * Create recovery
   * @deprecated This query should not be used, using backupRecovery instead.
   */
  createRecovery?: Maybe<CreateRecoveryPayload>;
  /**
   * Update recovery
   * @deprecated This query should not be used, using backupRecovery instead.
   */
  updateRecovery?: Maybe<UpdateRecoveryPayload>;
  /**
   * Delete recovery
   * @deprecated This query should not be used, using backupRecovery instead.
   */
  deleteRecovery?: Maybe<DeleteRecoveryPayload>;
  createSurvey?: Maybe<CreateSurveyPayload>;
  updateSurvey?: Maybe<UpdateSurveyPayload>;
  deleteSurvey?: Maybe<DeleteSurveyPayload>;
  createTrail?: Maybe<CreateTrailPayload>;
  updateTrail?: Maybe<UpdateTrailPayload>;
  deleteTrail?: Maybe<DeleteTrailPayload>;
  createTransaction?: Maybe<CreateTransactionPayload>;
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  deleteTransaction?: Maybe<DeleteTransactionPayload>;
  createWorkspace?: Maybe<CreateWorkspacePayload>;
  updateWorkspace?: Maybe<UpdateWorkspacePayload>;
  deleteWorkspace?: Maybe<DeleteWorkspacePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  createDeforaActivity?: Maybe<CreateActivityPayload>;
  updateDeforaActivity?: Maybe<CreateActivityPayload>;
  joinActivity?: Maybe<JoinActivityPayload>;
  deleteEvent?: Maybe<DeleteEventPayload>;
  sendPayloadToWeb?: Maybe<Scalars['Boolean']>;
  createDeforaGroup: Group;
  joinDeforaGroup?: Maybe<GroupAndMemberPayload>;
  updateDeforaGroup: Group;
  updateStatus?: Maybe<UpdateStatusPayload>;
  sendInvitationEmail?: Maybe<Scalars['Boolean']>;
  verifySMSCode?: Maybe<Scalars['Boolean']>;
  inviteMember?: Maybe<Invitation>;
  adminInvited?: Maybe<AdminInvitedPayload>;
  memberRemove?: Maybe<Scalars['Boolean']>;
  memberReinvite?: Maybe<Scalars['Boolean']>;
  startQrcodeComm?: Maybe<StartQrcodeCommPayload>;
  messageQrcodeComm?: Maybe<MessageQrcodeCommPayload>;
  backupRecovery?: Maybe<BackupRecoveryPayload>;
  purchaseCoupon?: Maybe<PurchaseCouponPayload>;
  refundCoupon?: Maybe<RefundCouponPayload>;
  checkValidation?: Maybe<PaymentResponsePayload>;
  routinePayment?: Maybe<PaymentResponsePayload>;
  refundPayment?: Maybe<PaymentResponsePayload>;
  checkRoutinePayment?: Maybe<PaymentResponsePayload>;
  updateRoutinePayment?: Maybe<PaymentResponsePayload>;
  initPayment?: Maybe<InitPaymentPayload>;
  joinWorkspaceWithCode?: Maybe<JoinWorkSpaceResult>;
  createWorkspaceFirst?: Maybe<JoinWorkSpaceResult>;
  adminAsMember?: Maybe<JoinWorkSpaceResult>;
  updateWorkspaceKey?: Maybe<Workspace>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateActivityArgs = {
  input?: Maybe<CreateActivityInput>;
};


export type MutationUpdateActivityArgs = {
  input?: Maybe<UpdateActivityInput>;
};


export type MutationDeleteActivityArgs = {
  input?: Maybe<DeleteActivityInput>;
};


export type MutationCreateBoardArgs = {
  input?: Maybe<CreateBoardInput>;
};


export type MutationUpdateBoardArgs = {
  input?: Maybe<UpdateBoardInput>;
};


export type MutationDeleteBoardArgs = {
  input?: Maybe<DeleteBoardInput>;
};


export type MutationUpdateCopyrightArgs = {
  input?: Maybe<UpdateCopyrightInput>;
};


export type MutationCreateCustomerArgs = {
  input?: Maybe<CreateCustomerInput>;
};


export type MutationUpdateCustomerArgs = {
  input?: Maybe<UpdateCustomerInput>;
};


export type MutationDeleteCustomerArgs = {
  input?: Maybe<DeleteCustomerInput>;
};


export type MutationCreateFeedArgs = {
  input?: Maybe<CreateFeedInput>;
};


export type MutationUpdateFeedArgs = {
  input?: Maybe<UpdateFeedInput>;
};


export type MutationDeleteFeedArgs = {
  input?: Maybe<DeleteFeedInput>;
};


export type MutationCreateFollowArgs = {
  input?: Maybe<CreateFollowInput>;
};


export type MutationUpdateFollowArgs = {
  input?: Maybe<UpdateFollowInput>;
};


export type MutationDeleteFollowArgs = {
  input?: Maybe<DeleteFollowInput>;
};


export type MutationCreateGroupArgs = {
  input?: Maybe<CreateGroupInput>;
};


export type MutationUpdateGroupArgs = {
  input?: Maybe<UpdateGroupInput>;
};


export type MutationDeleteGroupArgs = {
  input?: Maybe<DeleteGroupInput>;
};


export type MutationUpdateHistoryArgs = {
  input?: Maybe<UpdateHistoryInput>;
};


export type MutationUpdateHomeArgs = {
  input?: Maybe<UpdateHomeInput>;
};


export type MutationCreateIdeaBoxArgs = {
  input?: Maybe<CreateIdeaBoxInput>;
};


export type MutationUpdateIdeaBoxArgs = {
  input?: Maybe<UpdateIdeaBoxInput>;
};


export type MutationDeleteIdeaBoxArgs = {
  input?: Maybe<DeleteIdeaBoxInput>;
};


export type MutationCreateInteractionArgs = {
  input?: Maybe<CreateInteractionInput>;
};


export type MutationUpdateInteractionArgs = {
  input?: Maybe<UpdateInteractionInput>;
};


export type MutationDeleteInteractionArgs = {
  input?: Maybe<DeleteInteractionInput>;
};


export type MutationCreateInvitationArgs = {
  input?: Maybe<CreateInvitationInput>;
};


export type MutationUpdateInvitationArgs = {
  input?: Maybe<UpdateInvitationInput>;
};


export type MutationDeleteInvitationArgs = {
  input?: Maybe<DeleteInvitationInput>;
};


export type MutationCreateMemberInteractionArgs = {
  input?: Maybe<CreateMemberInteractionInput>;
};


export type MutationUpdateMemberInteractionArgs = {
  input?: Maybe<UpdateMemberInteractionInput>;
};


export type MutationDeleteMemberInteractionArgs = {
  input?: Maybe<DeleteMemberInteractionInput>;
};


export type MutationCreateMemberRoleArgs = {
  input?: Maybe<CreateMemberRoleInput>;
};


export type MutationUpdateMemberRoleArgs = {
  input?: Maybe<UpdateMemberRoleInput>;
};


export type MutationDeleteMemberRoleArgs = {
  input?: Maybe<DeleteMemberRoleInput>;
};


export type MutationCreateMemberArgs = {
  input?: Maybe<CreateMemberInput>;
};


export type MutationUpdateMemberArgs = {
  input?: Maybe<UpdateMemberInput>;
};


export type MutationDeleteMemberArgs = {
  input?: Maybe<DeleteMemberInput>;
};


export type MutationCreatePointPurchaseArgs = {
  input?: Maybe<CreatePointPurchaseInput>;
};


export type MutationUpdatePointPurchaseArgs = {
  input?: Maybe<UpdatePointPurchaseInput>;
};


export type MutationDeletePointPurchaseArgs = {
  input?: Maybe<DeletePointPurchaseInput>;
};


export type MutationCreatePollArgs = {
  input?: Maybe<CreatePollInput>;
};


export type MutationUpdatePollArgs = {
  input?: Maybe<UpdatePollInput>;
};


export type MutationDeletePollArgs = {
  input?: Maybe<DeletePollInput>;
};


export type MutationCreatePostArgs = {
  input?: Maybe<CreatePostInput>;
};


export type MutationUpdatePostArgs = {
  input?: Maybe<UpdatePostInput>;
};


export type MutationDeletePostArgs = {
  input?: Maybe<DeletePostInput>;
};


export type MutationCreateQnaArgs = {
  input?: Maybe<CreateQnaInput>;
};


export type MutationUpdateQnaArgs = {
  input?: Maybe<UpdateQnaInput>;
};


export type MutationDeleteQnaArgs = {
  input?: Maybe<DeleteQnaInput>;
};


export type MutationCreateQrcodeCommArgs = {
  input?: Maybe<CreateQrcodeCommInput>;
};


export type MutationUpdateQrcodeCommArgs = {
  input?: Maybe<UpdateQrcodeCommInput>;
};


export type MutationDeleteQrcodeCommArgs = {
  input?: Maybe<DeleteQrcodeCommInput>;
};


export type MutationCreateQuestionArgs = {
  input?: Maybe<CreateQuestionInput>;
};


export type MutationUpdateQuestionArgs = {
  input?: Maybe<UpdateQuestionInput>;
};


export type MutationDeleteQuestionArgs = {
  input?: Maybe<DeleteQuestionInput>;
};


export type MutationCreateQuizArgs = {
  input?: Maybe<CreateQuizInput>;
};


export type MutationUpdateQuizArgs = {
  input?: Maybe<UpdateQuizInput>;
};


export type MutationDeleteQuizArgs = {
  input?: Maybe<DeleteQuizInput>;
};


export type MutationCreateRecoveryArgs = {
  input?: Maybe<CreateRecoveryInput>;
};


export type MutationUpdateRecoveryArgs = {
  input?: Maybe<UpdateRecoveryInput>;
};


export type MutationDeleteRecoveryArgs = {
  input?: Maybe<DeleteRecoveryInput>;
};


export type MutationCreateSurveyArgs = {
  input?: Maybe<CreateSurveyInput>;
};


export type MutationUpdateSurveyArgs = {
  input?: Maybe<UpdateSurveyInput>;
};


export type MutationDeleteSurveyArgs = {
  input?: Maybe<DeleteSurveyInput>;
};


export type MutationCreateTrailArgs = {
  input?: Maybe<CreateTrailInput>;
};


export type MutationUpdateTrailArgs = {
  input?: Maybe<UpdateTrailInput>;
};


export type MutationDeleteTrailArgs = {
  input?: Maybe<DeleteTrailInput>;
};


export type MutationCreateTransactionArgs = {
  input?: Maybe<CreateTransactionInput>;
};


export type MutationUpdateTransactionArgs = {
  input?: Maybe<UpdateTransactionInput>;
};


export type MutationDeleteTransactionArgs = {
  input?: Maybe<DeleteTransactionInput>;
};


export type MutationCreateWorkspaceArgs = {
  input?: Maybe<CreateWorkspaceInput>;
};


export type MutationUpdateWorkspaceArgs = {
  input?: Maybe<UpdateWorkspaceInput>;
};


export type MutationDeleteWorkspaceArgs = {
  input?: Maybe<DeleteWorkspaceInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationCreateDeforaActivityArgs = {
  input: CreateDeforaActivityInput;
};


export type MutationUpdateDeforaActivityArgs = {
  input: CreateDeforaActivityInput;
};


export type MutationJoinActivityArgs = {
  input: JoinActivityInput;
};


export type MutationDeleteEventArgs = {
  input: DeleteEventInput;
};


export type MutationSendPayloadToWebArgs = {
  input?: Maybe<SendPayloadInput>;
};


export type MutationCreateDeforaGroupArgs = {
  input: CreateDeforaGroupInput;
};


export type MutationJoinDeforaGroupArgs = {
  input: JoinDeforaGroupInput;
};


export type MutationUpdateDeforaGroupArgs = {
  input: UpdateDeforaGroupInput;
};


export type MutationUpdateStatusArgs = {
  input?: Maybe<UpdateStatusInput>;
};


export type MutationSendInvitationEmailArgs = {
  input?: Maybe<SendInvitationEmailInput>;
};


export type MutationVerifySmsCodeArgs = {
  input?: Maybe<VerifySmsInput>;
};


export type MutationInviteMemberArgs = {
  input?: Maybe<InviteMemberInput>;
};


export type MutationAdminInvitedArgs = {
  input?: Maybe<AdminInvitedInput>;
};


export type MutationMemberRemoveArgs = {
  memberRoleIds?: Maybe<Array<Scalars['String']>>;
};


export type MutationMemberReinviteArgs = {
  memberRoleIds?: Maybe<Array<Scalars['String']>>;
};


export type MutationStartQrcodeCommArgs = {
  input?: Maybe<StartQrcodeCommInput>;
};


export type MutationMessageQrcodeCommArgs = {
  input?: Maybe<MessageQrcodeCommInput>;
};


export type MutationBackupRecoveryArgs = {
  input: BackupRecoveryInput;
};


export type MutationPurchaseCouponArgs = {
  input?: Maybe<PurchaseCouponInput>;
};


export type MutationRefundCouponArgs = {
  pinNumber: Scalars['String'];
  estimateOnly?: Maybe<Scalars['Int']>;
};


export type MutationCheckValidationArgs = {
  input?: Maybe<PaymentInput>;
};


export type MutationRoutinePaymentArgs = {
  input?: Maybe<PaymentInput>;
};


export type MutationRefundPaymentArgs = {
  input?: Maybe<PaymentInput>;
};


export type MutationCheckRoutinePaymentArgs = {
  input?: Maybe<PaymentInput>;
};


export type MutationUpdateRoutinePaymentArgs = {
  input?: Maybe<PaymentInput>;
};


export type MutationInitPaymentArgs = {
  input?: Maybe<InitPaymentInput>;
};


export type MutationJoinWorkspaceWithCodeArgs = {
  input?: Maybe<JoinWorkspaceWithCodeInput>;
};


export type MutationCreateWorkspaceFirstArgs = {
  input?: Maybe<CreateWorkspaceFirstInput>;
};


export type MutationAdminAsMemberArgs = {
  input?: Maybe<AdminAsMemberInput>;
};


export type MutationUpdateWorkspaceKeyArgs = {
  input?: Maybe<UpdateWorkspaceKeyInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CheckValidationMutationVariables = Exact<{
  input?: Maybe<PaymentInput>;
}>;


export type CheckValidationMutation = (
  { __typename?: 'Mutation' }
  & { checkValidation?: Maybe<(
    { __typename?: 'paymentResponsePayload' }
    & Pick<PaymentResponsePayload, 'success'>
  )> }
);

export type RefundPaymentMutationVariables = Exact<{
  input?: Maybe<PaymentInput>;
}>;


export type RefundPaymentMutation = (
  { __typename?: 'Mutation' }
  & { refundPayment?: Maybe<(
    { __typename?: 'paymentResponsePayload' }
    & Pick<PaymentResponsePayload, 'success'>
  )> }
);

export type InitPaymentMutationVariables = Exact<{
  input?: Maybe<InitPaymentInput>;
}>;


export type InitPaymentMutation = (
  { __typename?: 'Mutation' }
  & { initPayment?: Maybe<(
    { __typename?: 'initPaymentPayload' }
    & Pick<InitPaymentPayload, 'merchant_uid'>
  )> }
);

export type RoutinePaymentMutationVariables = Exact<{
  input?: Maybe<PaymentInput>;
}>;


export type RoutinePaymentMutation = (
  { __typename?: 'Mutation' }
  & { routinePayment?: Maybe<(
    { __typename?: 'paymentResponsePayload' }
    & Pick<PaymentResponsePayload, 'success'>
  )> }
);

export type UpdateRoutinePaymentMutationVariables = Exact<{
  input?: Maybe<PaymentInput>;
}>;


export type UpdateRoutinePaymentMutation = (
  { __typename?: 'Mutation' }
  & { updateRoutinePayment?: Maybe<(
    { __typename?: 'paymentResponsePayload' }
    & Pick<PaymentResponsePayload, 'success'>
  )> }
);


export const CheckValidationDocument = gql`
    mutation checkValidation($input: paymentInput) {
  checkValidation(input: $input) {
    success
  }
}
    `;
export type CheckValidationMutationFn = Apollo.MutationFunction<CheckValidationMutation, CheckValidationMutationVariables>;

/**
 * __useCheckValidationMutation__
 *
 * To run a mutation, you first call `useCheckValidationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckValidationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkValidationMutation, { data, loading, error }] = useCheckValidationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckValidationMutation(baseOptions?: Apollo.MutationHookOptions<CheckValidationMutation, CheckValidationMutationVariables>) {
        return Apollo.useMutation<CheckValidationMutation, CheckValidationMutationVariables>(CheckValidationDocument, baseOptions);
      }
export type CheckValidationMutationHookResult = ReturnType<typeof useCheckValidationMutation>;
export type CheckValidationMutationResult = Apollo.MutationResult<CheckValidationMutation>;
export type CheckValidationMutationOptions = Apollo.BaseMutationOptions<CheckValidationMutation, CheckValidationMutationVariables>;
export const RefundPaymentDocument = gql`
    mutation refundPayment($input: paymentInput) {
  refundPayment(input: $input) {
    success
  }
}
    `;
export type RefundPaymentMutationFn = Apollo.MutationFunction<RefundPaymentMutation, RefundPaymentMutationVariables>;

/**
 * __useRefundPaymentMutation__
 *
 * To run a mutation, you first call `useRefundPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefundPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refundPaymentMutation, { data, loading, error }] = useRefundPaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefundPaymentMutation(baseOptions?: Apollo.MutationHookOptions<RefundPaymentMutation, RefundPaymentMutationVariables>) {
        return Apollo.useMutation<RefundPaymentMutation, RefundPaymentMutationVariables>(RefundPaymentDocument, baseOptions);
      }
export type RefundPaymentMutationHookResult = ReturnType<typeof useRefundPaymentMutation>;
export type RefundPaymentMutationResult = Apollo.MutationResult<RefundPaymentMutation>;
export type RefundPaymentMutationOptions = Apollo.BaseMutationOptions<RefundPaymentMutation, RefundPaymentMutationVariables>;
export const InitPaymentDocument = gql`
    mutation initPayment($input: initPaymentInput) {
  initPayment(input: $input) {
    merchant_uid
  }
}
    `;
export type InitPaymentMutationFn = Apollo.MutationFunction<InitPaymentMutation, InitPaymentMutationVariables>;

/**
 * __useInitPaymentMutation__
 *
 * To run a mutation, you first call `useInitPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initPaymentMutation, { data, loading, error }] = useInitPaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInitPaymentMutation(baseOptions?: Apollo.MutationHookOptions<InitPaymentMutation, InitPaymentMutationVariables>) {
        return Apollo.useMutation<InitPaymentMutation, InitPaymentMutationVariables>(InitPaymentDocument, baseOptions);
      }
export type InitPaymentMutationHookResult = ReturnType<typeof useInitPaymentMutation>;
export type InitPaymentMutationResult = Apollo.MutationResult<InitPaymentMutation>;
export type InitPaymentMutationOptions = Apollo.BaseMutationOptions<InitPaymentMutation, InitPaymentMutationVariables>;
export const RoutinePaymentDocument = gql`
    mutation routinePayment($input: paymentInput) {
  routinePayment(input: $input) {
    success
  }
}
    `;
export type RoutinePaymentMutationFn = Apollo.MutationFunction<RoutinePaymentMutation, RoutinePaymentMutationVariables>;

/**
 * __useRoutinePaymentMutation__
 *
 * To run a mutation, you first call `useRoutinePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoutinePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [routinePaymentMutation, { data, loading, error }] = useRoutinePaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRoutinePaymentMutation(baseOptions?: Apollo.MutationHookOptions<RoutinePaymentMutation, RoutinePaymentMutationVariables>) {
        return Apollo.useMutation<RoutinePaymentMutation, RoutinePaymentMutationVariables>(RoutinePaymentDocument, baseOptions);
      }
export type RoutinePaymentMutationHookResult = ReturnType<typeof useRoutinePaymentMutation>;
export type RoutinePaymentMutationResult = Apollo.MutationResult<RoutinePaymentMutation>;
export type RoutinePaymentMutationOptions = Apollo.BaseMutationOptions<RoutinePaymentMutation, RoutinePaymentMutationVariables>;
export const UpdateRoutinePaymentDocument = gql`
    mutation updateRoutinePayment($input: paymentInput) {
  updateRoutinePayment(input: $input) {
    success
  }
}
    `;
export type UpdateRoutinePaymentMutationFn = Apollo.MutationFunction<UpdateRoutinePaymentMutation, UpdateRoutinePaymentMutationVariables>;

/**
 * __useUpdateRoutinePaymentMutation__
 *
 * To run a mutation, you first call `useUpdateRoutinePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoutinePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoutinePaymentMutation, { data, loading, error }] = useUpdateRoutinePaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRoutinePaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoutinePaymentMutation, UpdateRoutinePaymentMutationVariables>) {
        return Apollo.useMutation<UpdateRoutinePaymentMutation, UpdateRoutinePaymentMutationVariables>(UpdateRoutinePaymentDocument, baseOptions);
      }
export type UpdateRoutinePaymentMutationHookResult = ReturnType<typeof useUpdateRoutinePaymentMutation>;
export type UpdateRoutinePaymentMutationResult = Apollo.MutationResult<UpdateRoutinePaymentMutation>;
export type UpdateRoutinePaymentMutationOptions = Apollo.BaseMutationOptions<UpdateRoutinePaymentMutation, UpdateRoutinePaymentMutationVariables>;