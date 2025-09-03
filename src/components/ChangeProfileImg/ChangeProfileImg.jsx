/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { usePrincipalState } from "../../store/usePrincipalStore";
import * as s from "./styles";
import { changeProfileImgRequest } from "../../apis/account/accountApis";
import { ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../config/firebaseConfig";
import { v4 as uuid } from "uuid";

function ChangeProfileImg() {
  const { principal } = usePrincipalState();
  const [profileImg, setProfileImg] = useState(null);
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const OnChangeFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfileImg(file);

      //파일 읽기가 완료되면 호출될 콜백 함수 정의
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };

      //선택된 파일을 URL 형태로 전달
      reader.readAsDataURL(file);
    }
  };

  const changeOnClickHandler = () => {
    if (!newProfileImg) {
      alert("변경할 사진 파일을 선택해주세요.");
      return;
    }

    setIsUploading(true);

    const imageRef = ref(
      storage,
      //firebase 파일명 (newProfileImg.name.split(".").pop() => 확장자)
      `profile-img/${uuid()}_${newProfileImg.name.split(".").pop()}`
    );

    const uploadTask = uploadBytesResumable(imageRef, newProfileImg);

    //업로드 상태변화를 감지하는 이벤트 리스너 등록
    uploadTask.on(
      "state_changed",
      //진행 상태 리스너
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      }
    );

    // changeProfileImgRequest({
    //   userId: principal.userId,
    //   profileImg: profileImg,
    // }).then((response) => {});
  };

  useEffect(() => {
    setProfileImg(principal?.profileImg);
  }, [principal?.profileImg]);

  return (
    <div css={s.container}>
      <h1>프로필 이미지 변경</h1>
      <div css={s.box}>
        <div>{profileImg ? <img src={profileImg} alt="userImg" /> : <></>}</div>
        <div>
          <input
            css={s.input}
            type="file"
            accept="image/*"
            onChange={OnChangeFileHandler}
          />
        </div>
        <div css={s.btnBox}>
          <button onClick={changeOnClickHandler}>변경하기</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfileImg;
