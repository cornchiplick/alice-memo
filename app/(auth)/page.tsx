import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">📋</span>
        <h1 className="text-4xl">AliceMemo</h1>
        <h2 className="text-2xl">메모를 느낌있게 해보세요!</h2>
      </div>
      <div className="flex w-full flex-col items-center gap-3">
        {/* <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          회원가입
        </Link> */}
        {/* 
        FIX 
        임시로 즉시 메인으로 이동하도록 조치 */}
        <Link href="/home" className="primary-btn py-2.5 text-lg">
          Admin 시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
