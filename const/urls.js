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
  FamousCourseUri: FamousCourseUri
}