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
  DeleteCourseUri: DeleteCourseUri
}