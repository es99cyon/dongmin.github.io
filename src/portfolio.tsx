import emoji from 'react-easy-emoji';


// 소개
export const greeting = {
	username: '만나서 반갑습니다!!',
	title: '안녕하세요!!',
	subTitle: '백엔드 개발자에서 프론트엔드로 전향을 원하는 김동민 입니다. 잘부탁드립니다.',
	role: "지원자 김동민 사이트입니다.",
	resumeLink: "Your resume link... google drive or something else",	
	view: true
};

//소셜 링크
export const socialMediaLinks = {

	github: 'https://github.com/es99cyon',
	linkedin: 'Your linkedin link',
	email: 'ey1114s@gmail.com',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

// 스킬
export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "subtitle for skill",
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
	],
	view: true
};

// 경력 
export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2021.07 ~ 2022.07",
			company: "Memovie",
			role: "Full Stack Developer",
		},
		{
			date: "2018.07 ~ 2019.04",
			company: "GmateSYStems",
			role: "System engineer",
		}
	],
	view: true
}
// 깃허브 프로젝트
export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

// 회사 프로젝트
export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "subtitle for projects",
	lists: [
		{
			title: "kakao MSG 기능 추가",
			desc: "클라이언트 불편 사항 요청으로 해당 기능들을 수정 및 추가하는 작업을 진행하여 불편함을 해소 하였습니다.",
			url: "#"
		},
		{
			title: "홈페이지 전체 개선 및 고도화",
			desc: "이용 간 개선 및 고도화 하여 사용자 편의성을 해소하였습니다.",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: true
};

// 노션 및 깃허브 
export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "김동민님의 노션",
			desc: "개인 노션입니다.",
			url: "https://www.notion.so/root-5438747d50ba4cfbacbfa56150f9929b"
		},
		{
			title: "김동민님의 깃허브",
			desc: "개인 깃허브입니다.",
			url: "https://github.com/es99cyon"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "김동민님의 연락처",
	introduce: emoji("010-4200-0766❤"),
	view: true
}

export const tests = {
	title: emoji("Projectsdd 💻"),
	subTitle: "subtitle for projects",
	view: true
}