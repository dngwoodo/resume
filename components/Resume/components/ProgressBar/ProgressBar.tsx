import Image from 'next/image';

export default function ProgressBar() {
  return (
    <div>
      <div>
        <div>
          <span>35%</span>
          <span>프로필 완성도</span>
        </div>
        <div>
          <span>10%</span>
          <span>프로필 추가 요약</span>
          <div>
            <Image src='/assets/question-mark.png' layout='fill' alt='help' />
          </div>
        </div>
      </div>
      <div>
        <div data-testid='progress-bar' />
      </div>
    </div>
  );
}
