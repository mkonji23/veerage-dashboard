interface SignInData {
  email: string
  password: string
}
/**
 * 회원가입을 한다.
 * @param email 이메일
 * @param password 비밀번호
 */
const fetchSignup = async ({ email, password }: SignInData) => {
  try {
    const response = await fetch('/api/db/sign-up', {
      method: 'POST', // POST 요청 설정
      headers: {
        'Content-Type': 'application/json', // JSON 형식의 데이터 전송 설정
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
      },
      body: JSON.stringify({
        id: email,
        password,
        /* 여기에 POST로 전송할 데이터 입력 */
      }), // 전송할 데이터를 JSON 문자열로 변환하여 설정
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const jsonData = await response.json()
    console.log('result', jsonData)
    return jsonData
    // POST 요청에 대한 응답 데이터 처리
  } catch (error) {
    // 오류 처리
    // setError(error.message);
  } finally {
    // 로딩 상태 변경
    // setLoading(false);
  }
}

/**
 * 로그인을 하는 함수입니다.
 * @param email 이메일
 * @param password 비밀번호
 */
const fetchSignIn = async ({ email, password }: SignInData) => {
  try {
    console.log(email, password)
    const response = await fetch('/api/db/sign-in', {
      method: 'POST', // POST 요청 설정
      headers: {
        'Content-Type': 'application/json', // JSON 형식의 데이터 전송 설정
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
      },
      body: JSON.stringify({
        id: email,
        password,
        /* 여기에 POST로 전송할 데이터 입력 */
      }), // 전송할 데이터를 JSON 문자열로 변환하여 설정
    })

    const jsonData = await response.json()
    return jsonData
    // POST 요청에 대한 응답 데이터 처리
  } catch (error) {
    // 오류 처리
    console.error('Error fetching data:', error)
    return []
  } finally {
    // 로딩 상태 변경
    // setLoading(false);
  }
}

export { fetchSignup, fetchSignIn }
