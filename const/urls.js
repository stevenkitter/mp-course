const BaseUrl = "http://localhost:8080";

const Code2SessionUri = BaseUrl + "/code2session";

const UploadFileUri = BaseUrl + "/uploadOneFile";


const UserModule = "/user";
const SaveUserInfoUri = BaseUrl + UserModule + "/saveUserInfo";
const ApplyTeacherUri = BaseUrl + UserModule + "/apply";
const UserInfoUri = BaseUrl + UserModule + "/userInfo";

const CourseModule = "/course";
const AddCourseUri = BaseUrl + CourseModule + "/add";
const AllCourseUri = BaseUrl + CourseModule + "/all";
const MyCourseUri = BaseUrl + CourseModule + "/my";
const DeleteCourseUri = BaseUrl + CourseModule + "/delete";
const FamousCourseUri = BaseUrl + CourseModule + "/famous";

const BookModule = "/book";
const BookCategories = BaseUrl + BookModule + "/categories";
const BooksUri = BaseUrl + BookModule + "/books";
const ApplyBooks = BaseUrl + BookModule + "/apply";
const ApplyBookListUri = BaseUrl + BookModule + "/my";
const ReceiveBookUri = BaseUrl + BookModule + "/receive";

const AnswerModule = "/answer";
const SaveAnswerUri = BaseUrl + AnswerModule + "/add";
const MyAnswersUri = BaseUrl + AnswerModule + "/my";
const DeleteMyAnswersUri = BaseUrl + AnswerModule + "/delete";
const AddCommentUri = BaseUrl + AnswerModule + "/comment";
const CommentListUri = BaseUrl + AnswerModule + "/commentList";
const AllAnswerUri = BaseUrl + AnswerModule + "/all";

const CoursewareModule = "/courseware";
const AddCoursewareUri = BaseUrl + CoursewareModule + "/add";
const AllCoursewareUri = BaseUrl + CoursewareModule + "/all";
const MyCoursewareUri = BaseUrl + CoursewareModule + "/my";
const DeleteCoursewareUri = BaseUrl + CoursewareModule + "/delete";



module.exports = {
  BaseUrl: BaseUrl,
  Code2SessionUri: Code2SessionUri,
  SaveUserInfoUri: SaveUserInfoUri,
  UploadFileUri: UploadFileUri,
  ApplyTeacherUri: ApplyTeacherUri,
  UserInfoUri: UserInfoUri,

  AddCourseUri: AddCourseUri,
  AllCourseUri: AllCourseUri,
  MyCourseUri: MyCourseUri,
  DeleteCourseUri: DeleteCourseUri,

  BookCategories: BookCategories,
  BooksUri: BooksUri,
  ApplyBooks: ApplyBooks,

  ApplyBookListUri: ApplyBookListUri,
  ReceiveBookUri: ReceiveBookUri,
  FamousCourseUri: FamousCourseUri,

  SaveAnswerUri: SaveAnswerUri,
  MyAnswersUri: MyAnswersUri,
  DeleteMyAnswersUri: DeleteMyAnswersUri,

  AddCommentUri: AddCommentUri,
  CommentListUri: CommentListUri,
  AllAnswerUri: AllAnswerUri,

  AddCoursewareUri: AddCoursewareUri,
  AllCoursewareUri: AllCoursewareUri,
  MyCoursewareUri: MyCoursewareUri,
  DeleteCoursewareUri: DeleteCoursewareUri
}