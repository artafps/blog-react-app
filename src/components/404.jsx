import MainLayout from "./../layouts/MainLayout";
import { useNavigate } from 'react-router-dom';
function Page404() {
  const navigate = useNavigate()
  const backHome = () =>{
    navigate("/"+"#")
  }
  return (
    <MainLayout container="404">
    <title>arta dev - 404</title>
      <center>
        <h1>404</h1>
        <p>
          <strong>فایل پیدا نشد ! :(</strong>
        </p>
        <p>
          لطفا آدرس را برسی کنید شاید آدرس اشتباه باشد!
        </p>
        <button className="btn btn-primary" onClick={backHome}>برگشت به خانه</button>
      </center>
    </MainLayout>
  );
}
export default Page404;
