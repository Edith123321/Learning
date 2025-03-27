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
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Your First JavaScript Program",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/W6NZfCO5SIk",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Data Types in JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Type Conversion and Coercion",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/z4-TS1XQYQw",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Control Structures",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Conditional Statements",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/IsG4Xd6LlsM",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Loops and Iteration",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/s9wW2PpJsmQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Functions in JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Function Declarations and Expressions",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/N8ap4k_1QEQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Arrow Functions",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/h33Srr5J9nY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Working with the DOM",
                "chapterContent": [
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "DOM Manipulation Basics",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/0ik6X4DJKCc",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Event Handling",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/XF1_MlZ5l6M",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "50_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "50_3dXfJHjL23kBq5lG7Yyaa5fA9P",
            "50_4rTlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "50_3dXfJHjL23kBq5lG7Yyaa5fA9P",
                "rating": 4,
                "_id": "6773e37360cb0ab974342315"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Installing Python and IDE",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/YYXdXT2l-Gg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Writing Your First Python Program",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/daefaLgNkw0",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Python Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Variables and Data Types",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/khKv-8q7YmY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Operators and Expressions",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/BJ-VvGyQxho",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Control Flow",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Conditional Statements",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/DZwmZ8Usvnk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Loops in Python",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/6iF8Xb7Z3wQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Functions",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Defining and Calling Functions",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/9Os0o3wzSaI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Function Arguments and Return Values",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/5K08WcjGV6c",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Data Structures",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Lists and Tuples",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/Eaz5e6M8tL4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Dictionaries and Sets",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/daefaLgNkw0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20bc1512100b91a6d9b8b25",
        "enrolledStudents": [
            "50_3dXfJHjL23kBq5lG7Yyaa5fA9P",
            "50_5sGlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_6tHlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_3dXfJHjL23kBq5lG7Yyaa5fA9P",
                "rating": 4,
                "_id": "6773e37360cb0ab974342315"
            },
            {
                "userId": "50_5sGlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342316"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "The 'this' Keyword",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/gvicrj31JOM",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Prototypes and Inheritance",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/wstwjQ1yqWQ",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Asynchronous JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Callbacks and Promises",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/DHvZLI7Db8E",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Async/Await",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/V_Kr9OSfDeU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "ES6+ Features",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Let, Const, and Block Scoping",
                        "lectureDuration": 12,
                        "lectureUrl": "https://youtu.be/XgSjoHgy3Rk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Destructuring and Spread Operator",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/NIq3qLaHCIs",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Modules and Bundlers",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "ES6 Modules",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/cRHQNNcYf6s",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Introduction to Webpack",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/MpGLUVbqoYQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Design Patterns",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Singleton and Factory Patterns",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/YJVj4XNASDk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Observer and Module Patterns",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/3PUVr8jFMGg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20cc1512100b91a6d9b8b26",
        "enrolledStudents": [
            "50_4rTlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_7uIlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_8vJlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_4rTlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342316"
            },
            {
                "userId": "50_7uIlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342317"
            }
        ],
        "createdAt": "2024-12-19T08:16:53.622Z",
        "updatedAt": "2025-01-04T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/1JsJx1x35c0/maxresdefault.jpg"
    },
    // Additional courses would follow the same pattern with 5+ chapters and 6+ lectures
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up a React Project",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/9hb_0qZmoVI",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Components and Props",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Functional Components",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/Cla1WwguArA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Class Components",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/iZhV0bILFb0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "State and Lifecycle",
                "chapterContent": [
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Understanding State",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/4ORZ1GmjaMc",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Component Lifecycle Methods",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/m_mtV4YaI8c",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Hooks",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Introduction to Hooks",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/dpw9EHDh2bM",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "useState and useEffect",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/O6P86uwfdR0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Building a Complete App",
                "chapterContent": [
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Planning the App Structure",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/w7ejDZ8SWv8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Implementing the App",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/sBws8MSXN7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20dc1512100b91a6d9b8b27",
        "enrolledStudents": [
            "50_5sGlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_9wKlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_10xLlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_5sGlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342317"
            },
            {
                "userId": "50_9wKlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342318"
            }
        ],
        "createdAt": "2024-12-20T08:16:53.622Z",
        "updatedAt": "2025-01-05T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/DLX62G4lc44/maxresdefault.jpg"
    },
    // Continue with other courses following the same pattern...
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Installing Node.js and NPM",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/JINE4D0Syqw",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Your First Node.js Application",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/U8XF6AFGqlc",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Core Modules",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "File System Module",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/ztspvPYybIY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "HTTP Module",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/rLTY0v5XaqM",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "NPM and Packages",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Package Management with NPM",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/jHDhaSSKmB0",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Popular Node.js Packages",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/6FOq4cUdH8k",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Express Framework",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Introduction to Express",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/L72fhGm1tfE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Routing in Express",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/1hPgQWbWmEk",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Building RESTful APIs",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "API Design Principles",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/7YcW25PHnAA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Implementing CRUD Operations",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/voDummz1gO0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20ec1512100b91a6d9b8b28",
        "enrolledStudents": [
            "50_6tHlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_11yMlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_12zNlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_6tHlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342318"
            },
            {
                "userId": "50_11yMlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342319"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Stacks and Queues",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/wjI1WNcIntg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Hash Tables",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/shs0KM3wKv8",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Trees and Graphs",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Binary Trees",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/fAAZixBzIAI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Graph Representations",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/09_LlHjoEiY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Sorting Algorithms",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Bubble Sort and Selection Sort",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/xli_FI7CuzA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Merge Sort and Quick Sort",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/7h1s2SojIRw",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Searching Algorithms",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Linear and Binary Search",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/T98PIp4omUA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Depth-First and Breadth-First Search",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/tWVWeAqZ0WU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Algorithm Analysis",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Big-O Notation",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/kS_gr2_-ws8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Time and Space Complexity",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/JgWm6sQwS_I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20fc1512100b91a6d9b8b29",
        "enrolledStudents": [
            "50_7uIlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_13aOlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_14bPlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_7uIlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342319"
            },
            {
                "userId": "50_13aOlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342320"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Machine Learning",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/ukzFI9rgwfU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "ML Workflow",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/cKxRvEZd3Mw",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Data Preparation",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Cleaning",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/5bS3yB6Y7oI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Feature Engineering",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/zxMl4SS6S9w",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Supervised Learning",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Linear Regression",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/nk2CQITm_eo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Classification Algorithms",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/HdlDYng8g9s",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Unsupervised Learning",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Clustering",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/7xHsRkOdVwo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Dimensionality Reduction",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/9iol3Lk6kyU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Model Evaluation",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Metrics for Classification",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/HBi-P5j0Kec",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Cross-Validation",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/fSytzGwwBVw",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20gc1512100b91a6d9b8b30",
        "enrolledStudents": [
            "50_8vJlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_15cQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_16dRlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_8vJlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342320"
            },
            {
                "userId": "50_15cQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342321"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Responsive Design",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/srvUrASNj0s",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "JavaScript Fundamentals",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/PkZNo7MFNFg",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Backend Development",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Node.js and Express",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/RLtyhwFtXQA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Database Integration",
                        "lectureDuration": 45,
                        "lectureUrl": "https://youtu.be/zdgYw-3tzfI",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "API Development",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "RESTful API Design",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/7YcW25PHnAA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Authentication and Authorization",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/2jqok-WgelI",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Frontend Frameworks",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "React Basics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/w7ejDZ8SWv8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "State Management",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/9KJqSdtngfs",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Deployment",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "CI/CD Pipelines",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/1N4tD8Q2lq0",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Cloud Deployment",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/7mBcpRqB5uQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20hc1512100b91a6d9b8b31",
        "enrolledStudents": [
            "50_9wKlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_17eSlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_18fTlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_9wKlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342321"
            },
            {
                "userId": "50_17eSlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342322"
            }
        ],
        "createdAt": "2024-12-24T08:16:53.622Z",
        "updatedAt": "2025-01-09T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg"
    },
    // Continuing with the remaining courses...
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cloud Service Models",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/36zducUX16w",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Cloud Deployment Models",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/ajL4Ibr6W6U",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "AWS Essentials",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "AWS Core Services",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/IT1X42D1KeA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "EC2 and S3",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/mZ5H8sn_2ZI",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Azure Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Azure Core Services",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/NKEFWyqJ5XA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Virtual Machines and Storage",
                        "lectureDuration": 32,
                        "lectureUrl": "https://youtu.be/3Arj5zlUPG4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Google Cloud Platform",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "GCP Core Services",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/3EiSymRrKI4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Compute Engine and Cloud Storage",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/3EiSymRrKI4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Cloud Deployment",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Deploying Applications to Cloud",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/7mBcpRqB5uQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Scaling and Load Balancing",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/a9__D53WsUs",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20ic1512100b91a6d9b8b32",
        "enrolledStudents": [
            "50_10xLlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_19gUlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_20hVlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_10xLlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342322"
            },
            {
                "userId": "50_19gUlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342323"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cybersecurity Threats",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/4kCICUPc9_8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Security Principles",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/g_jSJr7gX6M",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Cryptography",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Encryption Basics",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/vk3py9M2IfE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Public Key Infrastructure",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/i-rtxrEz_E8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Network Security",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Firewalls and IDS/IPS",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/A1URhLCQIJg",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "VPNs and Secure Protocols",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/6ZN7mLlSxWY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Ethical Hacking",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Penetration Testing",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/3Kq1MIfTWCE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Common Vulnerabilities",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/LOPN0QwZJh0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Security Best Practices",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Secure Coding",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/ciNHn38EyRc",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Incident Response",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/DQxqmR-NhX4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20jc1512100b91a6d9b8b33",
        "enrolledStudents": [
            "50_11yMlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_21iWlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_22jXlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_11yMlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342323"
            },
            {
                "userId": "50_21iWlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342324"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "DevOps Culture and Practices",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/_I94-tJlovg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "DevOps Toolchain",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/7l_n97Mt0ko",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Version Control",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Git Fundamentals",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/USjZcfj8yxE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Git Branching Strategies",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/xNVM5UxlFSA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "CI/CD Pipelines",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Continuous Integration",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/1er2cjUq1UI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Continuous Deployment",
                        "lectureDuration": 32,
                        "lectureUrl": "https://youtu.be/er3fZHJt0Uc",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Infrastructure as Code",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Terraform Basics",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/SLB_c_ayRMo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Ansible Fundamentals",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/fHO1X93e4WA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Monitoring and Logging",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Application Monitoring",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/2G0ru1Zob5w",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Centralized Logging",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/aHUtMbJw8iA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20kc1512100b91a6d9b8b34",
        "enrolledStudents": [
            "50_12zNlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_23kYlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_24lZlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_12zNlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342324"
            },
            {
                "userId": "50_23kYlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342325"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Design Thinking Process",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/a7sEoEvT8l8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "User-Centered Design",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/9BdtGjoIN4E",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Wireframing",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Low-Fidelity Wireframes",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/qpH7-KFWZRI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "High-Fidelity Wireframes",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/2qTqfBZzG8w",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Prototyping",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Interactive Prototypes",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/IMIeUhwH3yo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Prototyping Tools",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/3VClP6Jqd3Q",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "User Research",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Research Methods",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/QckIzHC99Xc",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Analyzing User Data",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/7V6o5R4kl5Y",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Design Systems",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Creating Design Systems",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/1yKKI1JxQ8c",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Implementing Design Systems",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/6Z6zw6YIuvU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20lc1512100b91a6d9b8b35",
        "enrolledStudents": [
            "50_13aOlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_25mAlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_26nBlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_13aOlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342325"
            },
            {
                "userId": "50_25mAlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342326"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "How Blockchain Works",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/xIDL_akeras",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Consensus Mechanisms",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/2u0I8l3ZL4w",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Cryptocurrencies",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Bitcoin Basics",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/l1si5ZWLgy0",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Ethereum and Smart Contracts",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/jxLkbJozKbY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Decentralized Applications",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "DApp Architecture",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/F50OrwV6Uk8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Building Your First DApp",
                        "lectureDuration": 45,
                        "lectureUrl": "https://youtu.be/coQ5dg8wM2o",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Smart Contracts",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Solidity Basics",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/ipwxYa-F1uY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Deploying Smart Contracts",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/8jI1TuEaTro",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Blockchain Security",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Security Best Practices",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/pYXy-A4siMw",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Common Vulnerabilities",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/4w2w7Ha6dRg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20mc1512100b91a6d9b8b36",
        "enrolledStudents": [
            "50_14bPlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_27oClvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_28pDlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_14bPlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342326"
            },
            {
                "userId": "50_27oClvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342327"
            }
        ],
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
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "History of AI",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/mJeNghZXtMo",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "AI Applications",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/Y46zXHvUB1s",
                        "isPreviewFree": true,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Machine Learning",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Supervised Learning",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/ukzFI9rgwfU",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Unsupervised Learning",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/7xHsRkOdVwo",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Neural Networks",
                "chapterContent": [
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Introduction to Neural Networks",
                        "lectureDuration": 45,
                        "lectureUrl": "https://youtu.be/aircAruvnKk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Deep Learning Basics",
                        "lectureDuration": 50,
                        "lectureUrl": "https://youtu.be/6M5VXKLf4D4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Natural Language Processing",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "NLP Fundamentals",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/8S3qHHUKqYk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Text Processing Techniques",
                        "lectureDuration": 45,
                        "lectureUrl": "https://youtu.be/rmVRLeJRkl4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "AI Ethics",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Ethical Considerations",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/7Pq-S557XQU",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Bias in AI",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/59bMh59JQDo",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "20nc1512100b91a6d9b8b37",
        "enrolledStudents": [
            "50_15cQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_29qElvXyr02B4Bq6hT0Gvaa5fT9V",
            "50_30rFlvXyr02B4Bq6hT0Gvaa5fT9V"
        ],
        "courseRatings": [
            {
                "userId": "50_15cQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342327"
            },
            {
                "userId": "50_29qElvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 4,
                "_id": "6773e37360cb0ab974342328"
            }
        ],
        "createdAt": "2024-12-30T08:16:53.622Z",
        "updatedAt": "2025-01-15T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/JMUxmLyrhSk/maxresdefault.jpg"
    }
   
];

// Export as default
export default assets;