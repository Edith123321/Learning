import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import search_icon from './search_icon.svg';
import cross_icon from './cross_icon.svg';
import upload_area from './upload_area.svg';
import sketch from './sktech.svg';
import microsoft_logo from './microsoft_logo.svg';
import walmart_logo from './walmart_logo.svg';
import accenture_logo from './accenture_logo.svg';
import adobe_logo from './adobe_logo.svg';
import paypal_logo from './paypal_logo.svg';
import course_1_thumbnail from './course_1.png';
import course_2_thumbnail from './course_2.png';
import course_3_thumbnail from './course_3.png';
import course_4_thumbnail from './course_4.png';
import star from './rating_star.svg';
import star_blank from './star_dull_icon.svg';
import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';
import arrow_icon from './arrow_icon.svg';
import down_arrow_icon from './down_arrow_icon.svg';
import time_left_clock_icon from './time_left_clock_icon.svg';
import time_clock_icon from './time_clock_icon.svg';
import user_icon from './user_icon.svg';
import home_icon from './home_icon.svg';
import add_icon from './add_icon.svg';
import my_course_icon from './my_course_icon.svg';
import person_tick_icon from './person_tick_icon.svg';
import facebook_icon from './facebook_icon.svg';
import instagram_icon from './instagram_icon.svg';
import twitter_icon from './twitter_icon.svg';
import file_upload_icon from './file_upload_icon.svg';
import appointments_icon from './appointments_icon.svg';
import earning_icon from './earning_icon.svg';
import dropdown_icon from './dropdown_icon.svg';
import patients_icon from './patients_icon.svg';
import play_icon from './play_icon.svg';
import blue_tick_icon from './blue_tick_icon.svg';
import course_4 from './course_4.png';
import profile_img from './profile_img.png';
import profile_img2 from './profile_img2.png';
import profile_img3 from './profile_img3.png';
import lesson_icon from './lesson_icon.svg';

// Define assets object
const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
};

// Dummy Data
export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "Edith",
    "email": "user.Edith@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
};

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 8
};

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
];

export const dummyCourses = [
    {
        "_id": "1",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
        "coursePrice": 49.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up Your Environment",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Types in JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },
    // Add other courses here...
    {
        "_id": "2",
        "courseTitle": "Python for Beginners",
        "courseDescription": "<h2>Learn Python Programming</h2><p>Python is a beginner-friendly language used in various fields like web development, data science, and automation.</p><ul><li>Understand Python syntax and semantics</li><li>Work with data structures</li><li>Write basic scripts</li></ul>",
        "coursePrice": 39.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with Python",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Python",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/rfscVS0vtbw",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_3dXfJHjL23kBq5lG7Yyaa5fA9P"],
        "courseRatings": [{ "userId": "user_3dXfJHjL23kBq5lG7Yyaa5fA9P", "rating": 4, "_id": "6773e37360cb0ab974342315" }],
        "createdAt": "2024-12-18T08:16:53.622Z",
        "updatedAt": "2025-01-03T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
        "_id": "3",
        "courseTitle": "Advanced JavaScript",
        "courseDescription": "<h2>Master Advanced JavaScript Concepts</h2><p>Take your JavaScript skills to the next level with advanced topics like closures, promises, and async/await.</p><ul><li>Understand closures and scope</li><li>Master asynchronous programming</li><li>Learn design patterns</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Concepts",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Closures and Scope",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/1JsJx1x35c0",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_4rTlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_4rTlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5, "_id": "6773e37360cb0ab974342316" }],
        "createdAt": "2024-12-19T08:16:53.622Z",
        "updatedAt": "2025-01-04T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/1JsJx1x35c0/maxresdefault.jpg"
    },
    {
        "_id": "4",
        "courseTitle": "React for Beginners",
        "courseDescription": "<h2>Learn React from Scratch</h2><p>React is a powerful library for building user interfaces. This course will teach you the basics of React, including components, state, and props.</p><ul><li>Understand React fundamentals</li><li>Build reusable components</li><li>Manage state and props</li></ul>",
        "coursePrice": 54.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to React",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is React?",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/DLX62G4lc44",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_5sGlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_5sGlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 4, "_id": "6773e37360cb0ab974342317" }],
        "createdAt": "2024-12-20T08:16:53.622Z",
        "updatedAt": "2025-01-05T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/DLX62G4lc44/maxresdefault.jpg"
    },
    {
        "_id": "5",
        "courseTitle": "Node.js Essentials",
        "courseDescription": "<h2>Learn Node.js for Backend Development</h2><p>Node.js is a runtime environment that allows you to build scalable backend applications. This course covers the essentials of Node.js, including modules, events, and file systems.</p><ul><li>Understand Node.js architecture</li><li>Build RESTful APIs</li><li>Work with databases</li></ul>",
        "coursePrice": 64.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with Node.js",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Node.js",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/fBNz5xF-Kx4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_6tHlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_6tHlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5, "_id": "6773e37360cb0ab974342318" }],
        "createdAt": "2024-12-21T08:16:53.622Z",
        "updatedAt": "2025-01-06T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/fBNz5xF-Kx4/maxresdefault.jpg"
    },
    {
        "_id": "6",
        "courseTitle": "Data Structures and Algorithms",
        "courseDescription": "<h2>Master Data Structures and Algorithms</h2><p>This course covers essential data structures and algorithms to help you ace coding interviews and build efficient software.</p><ul><li>Understand arrays, linked lists, and trees</li><li>Learn sorting and searching algorithms</li><li>Solve real-world problems</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Data Structures",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Arrays and Linked Lists",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/RBSGKlAvoiM",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_7uIlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_7uIlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5, "_id": "6773e37360cb0ab974342319" }],
        "createdAt": "2024-12-22T08:16:53.622Z",
        "updatedAt": "2025-01-07T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/RBSGKlAvoiM/maxresdefault.jpg"
    },
    {
        "_id": "7",
        "courseTitle": "Machine Learning Basics",
        "courseDescription": "<h2>Introduction to Machine Learning</h2><p>Learn the basics of machine learning, including supervised and unsupervised learning, and how to build predictive models.</p><ul><li>Understand ML concepts</li><li>Work with datasets</li><li>Build and evaluate models</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to ML",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Machine Learning?",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/7eh4d6sabA0",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_8vJlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_8vJlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 4, "_id": "6773e37360cb0ab974342320" }],
        "createdAt": "2024-12-23T08:16:53.622Z",
        "updatedAt": "2025-01-08T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/7eh4d6sabA0/maxresdefault.jpg"
    },
    {
        "_id": "8",
        "courseTitle": "Full-Stack Development",
        "courseDescription": "<h2>Become a Full-Stack Developer</h2><p>This course covers both frontend and backend development, teaching you how to build complete web applications.</p><ul><li>Learn HTML, CSS, and JavaScript</li><li>Build RESTful APIs</li><li>Deploy applications</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Frontend Development",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "HTML and CSS Basics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/UB1O30fR-EE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_9wKlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_9wKlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5, "_id": "6773e37360cb0ab974342321" }],
        "createdAt": "2024-12-24T08:16:53.622Z",
        "updatedAt": "2025-01-09T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg"
    },
    {
        "_id": "9",
        "courseTitle": "Cloud Computing Basics",
        "courseDescription": "<h2>Introduction to Cloud Computing</h2><p>Learn the fundamentals of cloud computing, including cloud models, services, and deployment strategies.</p><ul><li>Understand cloud architecture</li><li>Work with AWS and Azure</li><li>Deploy applications to the cloud</li></ul>",
        "coursePrice": 74.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cloud Computing?",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/M988_fsOSWo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_10xLlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_10xLlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 4, "_id": "6773e37360cb0ab974342322" }],
        "createdAt": "2024-12-25T08:16:53.622Z",
        "updatedAt": "2025-01-10T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/M988_fsOSWo/maxresdefault.jpg"
    },
    {
        "_id": "10",
        "courseTitle": "Cybersecurity Fundamentals",
        "courseDescription": "<h2>Learn the Basics of Cybersecurity</h2><p>This course introduces you to the world of cybersecurity, covering topics like encryption, network security, and ethical hacking.</p><ul><li>Understand security principles</li><li>Learn about encryption</li><li>Explore ethical hacking</li></ul>",
        "coursePrice": 84.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cybersecurity?",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/inWWhr5tnEA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_11yMlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_11yMlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5, "_id": "6773e37360cb0ab974342323" }],
        "createdAt": "2024-12-26T08:16:53.622Z",
        "updatedAt": "2025-01-11T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/inWWhr5tnEA/maxresdefault.jpg"
    },
    {
        "_id": "11",
        "courseTitle": "DevOps Essentials",
        "courseDescription": "<h2>Learn DevOps Practices</h2><p>This course covers the essentials of DevOps, including continuous integration, continuous delivery, and infrastructure as code.</p><ul><li>Understand DevOps principles</li><li>Work with CI/CD pipelines</li><li>Automate deployments</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to DevOps",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is DevOps?",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/9pZ2xmsSDdo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_12zNlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_12zNlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 4, "_id": "6773e37360cb0ab974342324" }],
        "createdAt": "2024-12-27T08:16:53.622Z",
        "updatedAt": "2025-01-12T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/9pZ2xmsSDdo/maxresdefault.jpg"
    },
    {
        "_id": "12",
        "courseTitle": "UI/UX Design Fundamentals",
        "courseDescription": "<h2>Learn UI/UX Design Principles</h2><p>This course introduces you to the basics of UI/UX design, including wireframing, prototyping, and user research.</p><ul><li>Understand design principles</li><li>Create wireframes and prototypes</li><li>Conduct user research</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to UI/UX",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is UI/UX Design?",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/c9Wg6Cb_YlU",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_13aOlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_13aOlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5, "_id": "6773e37360cb0ab974342325" }],
        "createdAt": "2024-12-28T08:16:53.622Z",
        "updatedAt": "2025-01-13T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/c9Wg6Cb_YlU/maxresdefault.jpg"
    },
    {
        "_id": "13",
        "courseTitle": "Blockchain Basics",
        "courseDescription": "<h2>Introduction to Blockchain Technology</h2><p>Learn the fundamentals of blockchain, including how it works, its applications, and how to build decentralized applications.</p><ul><li>Understand blockchain concepts</li><li>Learn about cryptocurrencies</li><li>Build smart contracts</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Blockchain Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Blockchain?",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/SSo_EIwHSd4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_14bPlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_14bPlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 4, "_id": "6773e37360cb0ab974342326" }],
        "createdAt": "2024-12-29T08:16:53.622Z",
        "updatedAt": "2025-01-14T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/SSo_EIwHSd4/maxresdefault.jpg"
    },
    {
        "_id": "14",
        "courseTitle": "Artificial Intelligence Basics",
        "courseDescription": "<h2>Introduction to AI</h2><p>This course covers the basics of artificial intelligence, including machine learning, neural networks, and natural language processing.</p><ul><li>Understand AI concepts</li><li>Learn about neural networks</li><li>Explore NLP</li></ul>",
        "coursePrice": 109.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to AI",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is AI?",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/JMUxmLyrhSk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_15cQlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{ "userId": "user_15cQlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5, "_id": "6773e37360cb0ab974342327" }],
        "createdAt": "2024-12-30T08:16:53.622Z",
        "updatedAt": "2025-01-15T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/JMUxmLyrhSk/maxresdefault.jpg"
    }
];

// Export assets as default
export default assets;