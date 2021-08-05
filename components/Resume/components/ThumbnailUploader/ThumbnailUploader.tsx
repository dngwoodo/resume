import Image from 'next/image';

export default function ThumbnailUploader() {
  return (
    <div>
      <div>
        <Image
          src='/images/avatar/resume.png'
          alt='avatar'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div>
        <div>
          <button type='button'>사진 변경</button>
          <button type='button'>사진 삭제</button>
        </div>
        <p>프로필 사진을 업로드 해주세요.</p>
      </div>
    </div>
  );
}
