
-------------------------------------------------------------------------------------


						   6장. http 모듈


-------------------------------------------------------------------------------------
1) TCP/IP를 기반으로 하는 프로토콜
2) HTML 페이지를 전달하는데 쓰임. 그 외 다른 파일 전송도 가능
3) http모듈은 NODE JS에서 HTTP 웹 서버를 생성하는 것과 관련된 모든 기능을 담당






6.1 요청과 응답

요청: 여기 경기도 성남시 분당구 정자동 그린팩토리 18층인데요, 양념 치킨 하나요.
응답: (도착) 똑똑! 치킨 배달 왔습니다. or 닭고기 물량이 없어서 주문을 못받습니다.

웹서버도 마찬가지!

요청하는 대상 : 치킨 주문하는 사람 : 클라이언트 : 요청 메시지를 보냄
응답하는 대상 : 치킨집 : 서버 : 스트림을 통해 응답 메시지를 보냄

(실습 1. 크롬 - 요소 검사 - network 속성에서 요청과 응답 형태 확인하기)








6.2 server 객체

지난시간 실습했던 내용과 겹침.

1. server의 메소드
 1) listen(port, [callback])
 2) close()
 3) on() = addListener()

2. EventEmitter 객체를 기반으로 만들어진 server객체
 ==> 이벤트의 연결이 가능하다!

 의 이벤트 들
  1) request
  2) connection
  3) close
  4) checkContinue
  5) upgrade
  6) clientError

(** 참고 EventEmitter : http://www.nodejs.org/api/events.html#events_class_events_eventemitter)








6.3 response 객체


 클라이언트에게 응답 메시지를 작성할 때 이용한다.
 request 이벤트 핸들러의 두번째 매개변수로 전달되는 객체



 1. response의 메소드
  1) writeHead(statusCode, object)
  2) end([data], [encoding])  == write([data], [encoding])



 2. 지난시간엔 하드코딩으로 응답을 보냈지만, 이번엔 파일 응답을 해보자.
  ** File system 모듈 필요 **


 1) html 파일 제공
  var fs = require('fs');
  var http = require('http');

  http.createServer(function(request, response){
  	fs.readFile('HTMLPage.html', function(error, data){
  	 response.writeHead(200, {'Content-Type' : 'text/html'});
  	 response.end(data);
  	});

  }).listen(55555, function(){
   console.log('Server Running at http://127.0.0.1:55555');
  });



 2) 사진/음악 파일 제공
  var fs = require('fs');
  var http = require('http');

  //FileSystem 모듈 (p.61)
  //p.95
  http.createServer(function(request, response){
  	fs.readFile('TestImage.jpg', function(error, data){
  	 response.writeHead(200, {'Content-Type' : 'image/jpeg'});
  	 response.end(data);
  	});

  	fs.readFile('TestMP3File.mp3', function(error, data){
  	 response.writeHead(200, {'Content-Type' : 'audio/mp3'});
  	 response.end(data);
  	});

  }).listen(55555, function(){
   console.log('Server Running at http://127.0.0.1:55555');
  }); 



 3) 쿠키의 생성

  쿠키: 키와 값이 들어있는 작은 데이터 조각. 이름, 값, 파기날짜, 경로 정보를 가지고 있다. 
  서버와 클라이언트에 모두 저장하고 사용 가능. response객체를 통하여 클라이언트에게
   쿠키 할당 가능.

    [Name = Value; Expires = 날짜; Domain = 도메인; Path =경로; Secure]

   가) 저장시 
   response.writeHead(200, {'Content-Type' : 'text/html',
   	'Set-Cookie' : ['breakfast = toast;Expires = ' + data.toUTCString(), 'dinner = chicken']
   });

   나) 추출시
   request.headers.cookie 속성으로 가져올 수 있다




 4) 페이지 강제 이동

  응답헤더의 Location 속성을 사용한다.

  response.writeHead(302, {'Location' : 'http://www.naver.com'});


  ** HTTP Status Code **

  1XX : 처리중
  2XX : 성공
  3XX : 리다이렉트
  4XX : 클라이언트 오류
  5XX : 서버 오류




6.4 request 객체

 request 이벤트가 발생하였을 때 이벤트 핸들러의 첫번째 매개변수.

 1) request 객체의 속성
 method : 클라이언트의 요청 방식
 url : 클라이언트가 요청한 url
 headers: 요청메시지 헤더
 trailers: 요청 메시지 트레일러
 httpVersion: http프로토콜 버전.



 2) url 속성에 따라 페이지 구분하기

  var pathname = url.parse(request.url).pathname;

  if(pathname == '/'){
   ...
  } else if(pathname = '/OtherPage') {
   ...
  }



 3) method 요청에 따라 페이지 구분하기

  if(request.method == 'GET'){
   ...
  } else if(request.method == 'POST'){
   ....
  }




 4) get 요청 매개변수 추출

  var query = url.parse(request.url, true).query;

  response.end(JSON.stringify(query)); 로 출력 가능.




 5) post 요청 매개변수 추출

  post 방식으로 데이터를 전달받은경우, request 객체의 data 이벤트로 데이터가 전달 됨 (지난시간 했음)

  request.on('data', function(data){
  	console.log(data);
  });




 6) 쿠키 추출
  request.headers.cookie 속성으로 가져올 수 있다