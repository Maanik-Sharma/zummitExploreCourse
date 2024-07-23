// const testimonials = [
//     {
//         name: "Jason Momoa",
//         title: "Aquaman",
//         image: "assets/testimonial-photo.svg",
//         rating: 5,
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing enim. Auctor tincidunt nibh gravida felis a pharetra. Vestibulum molestie non egestas odio nisi. Nisi blandit ullamcorper turpis congue nisi egestas pretium gravida a. Leo felis egestas pellentesque ullamcorper risus nibh rhoncus pharetra."
//     },
//     {
//         name: "Jason Momoa",
//         title: "Aquaman",
//         image: "assets/testimonial-photo.svg",
//         rating: 5,
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing enim. Auctor tincidunt nibh gravida felis a pharetra. Vestibulum molestie non egestas odio nisi. Nisi blandit ullamcorper turpis congue nisi egestas pretium gravida a. Leo felis egestas pellentesque ullamcorper risus nibh rhoncus pharetra."
//     },
//     {
//         name: "Jason Momoa",
//         title: "Aquaman",
//         image: "assets/testimonial-photo.svg",
//         rating: 5,
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing enim. Auctor tincidunt nibh gravida felis a pharetra. Vestibulum molestie non egestas odio nisi. Nisi blandit ullamcorper turpis congue nisi egestas pretium gravida a. Leo felis egestas pellentesque ullamcorper risus nibh rhoncus pharetra."
//     },
    
//     // Add more testimonial objects here
// ];

// function createTestimonialCard(testimonial) {
//     const card = document.createElement('div');
//     card.className = 'testimonial-card';
    
//     card.innerHTML = `
//         <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
//         <h2 class="testimonial-name">${testimonial.name}</h2>
//         <p class="testimonial-title">${testimonial.title}</p>
//         <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}</div>
//         <p class="testimonial-text">${testimonial.text}</p>
//     `;
    
//     return card;
// }

// function populateTestimonials() {
//     const container = document.getElementById('testimonialContainer');
//     testimonials.forEach(testimonial => {
//         container.appendChild(createTestimonialCard(testimonial));
//     });
// }

// document.addEventListener('DOMContentLoaded', populateTestimonials);


const testimonials = [
    {
        name: "Jason Momoa",
        title: "Aquaman",
        image: "assets/testimonial-photo.svg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dignissim consectetur dignissim adipiscing enim. Auctor tincidunt nibh gravida felis a pharetra. Vestibulum molestie non egestas odio nisi. Nisi blandit ullamcorper turpis congue nisi egestas pretium gravida a. Leo felis egestas pellentesque ullamcorper risus nibh rhoncus pharetra."
    },
    {
        name: "Jason Momoa",
        title: "Aquaman",
        image: "assets/testimonial-photo.svg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dignissim consectetur dignissim adipiscing enim. Auctor tincidunt nibh gravida felis a pharetra. Vestibulum molestie non egestas odio nisi. Nisi blandit ullamcorper turpis congue nisi egestas pretium gravida a. Leo felis egestas pellentesque ullamcorper risus nibh rhoncus pharetra."
    },
    {
        name: "Jason Momoa",
        title: "Aquaman",
        image: "assets/testimonial-photo.svg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dignissim consectetur dignissim adipiscing enim. Auctor tincidunt nibh gravida felis a pharetra. Vestibulum molestie non egestas odio nisi. Nisi blandit ullamcorper turpis congue nisi egestas pretium gravida a. Leo felis egestas pellentesque ullamcorper risus nibh rhoncus pharetra."
    },
    {
        name: "Jason Momoa",
        title: "Aquaman",
        image: "assets/testimonial-photo.svg",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dignissim consectetur dignissim adipiscing enim. Auctor tincidunt nibh gravida felis a pharetra. Vestibulum molestie non egestas odio nisi. Nisi blandit ullamcorper turpis congue nisi egestas pretium gravida a. Leo felis egestas pellentesque ullamcorper risus nibh rhoncus pharetra."
    },
    // Add more testimonials...
];

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    card.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
        <h2 class="testimonial-name">${testimonial.name}</h2>
        <p class="testimonial-title">${testimonial.title}</p>
        <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}</div>
        <p class="testimonial-text">${testimonial.text}</p>
    `;
    
    return card;
}

function populateTestimonials() {
    const container = document.getElementById('testimonialContainer');
    testimonials.forEach(testimonial => {
        container.appendChild(createTestimonialCard(testimonial));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateTestimonials();

    const carousel = document.getElementById('testimonialCarousel');
    const container = document.getElementById('testimonialContainer');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    container.addEventListener('mousedown', dragStart);
    container.addEventListener('touchstart', dragStart);
    container.addEventListener('mouseup', dragEnd);
    container.addEventListener('touchend', dragEnd);
    container.addEventListener('mousemove', drag);
    container.addEventListener('touchmove', drag);

    function dragStart(e) {
        isDragging = true;
        startPosition = getPositionX(e);
        carousel.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (isDragging) {
            const currentPosition = getPositionX(e);
            currentTranslate = prevTranslate + currentPosition - startPosition;
            container.style.transform = `translateX(${currentTranslate}px)`;
        }
    }

    function dragEnd() {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -100) snapToNext();
        else if (movedBy > 100) snapToPrev();
        else snapToCurrent();
        carousel.style.cursor = 'grab';
    }

    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    function snapToNext() {
        const cardWidth = container.firstElementChild.offsetWidth;
        prevTranslate -= cardWidth;
        prevTranslate = Math.max(prevTranslate, -cardWidth * (testimonials.length - 3));
        container.style.transform = `translateX(${prevTranslate}px)`;
    }

    function snapToPrev() {
        const cardWidth = container.firstElementChild.offsetWidth;
        prevTranslate += cardWidth;
        prevTranslate = Math.min(prevTranslate, 0);
        container.style.transform = `translateX(${prevTranslate}px)`;
    }

    function snapToCurrent() {
        container.style.transform = `translateX(${prevTranslate}px)`;
    }
});

//-------------------------Course JavaScript
const courses = [
    {
        id: 1,
        title: "Data Science Essentials",
        instructor: "Prof. Johnson",
        rating: 4.8,
        lessons: 50,
        duration: "36h 30m",
        price: 19999,
        image: "assets/dataScience.svg",
        category: "data-science"
    },
    {
        id: 2,
        title: "Big Data Insights",
        instructor: "Sarah Smith",
        rating: 4.7,
        lessons: 40,
        duration: "28h 15m",
        price: 19999,
        image: "assets/Big-data.svg",
        category: "analytics"
    },
    {
        id: 3,
        title: "Data Visualization Technique",
        instructor: "John Doe",
        rating: 4.9,
        lessons: 45,
        duration: "32h 45m",
        price: 19999,
        image: "assets/Data-visi.svg",
        category: "data-science"
    },
    // Add more course objects here
];

// function createCourseCard(course) {
//     return `
//         <div class="course-card">
//             <img src="${course.image}" alt="${course.title}" class="course-card__image">
//             <div class="course-card__content">
//                 <h3 class="course-card__title">${course.title}</h3>
//                 <p class="course-card__instructor">by ${course.instructor}</p>
//                 <div class="course-card__rating">★★★★★ ${course.rating}</div>
//                 <div class="course-card__meta">
//                     <span>${course.lessons} lessons</span>
//                     <span>${course.duration}</span>
//                 </div>
//                 <div class="course-card__price">₹ ${course.price}</div>
//             </div>
//         </div>
//     `;
// }

// function renderCourses(category = 'all') {
//     const courseGrid = document.getElementById('courseGrid');
//     courseGrid.innerHTML = '';
    
//     const filteredCourses = category === 'all' ? courses : courses.filter(course => course.category === category);
    
//     filteredCourses.forEach(course => {
//         courseGrid.innerHTML += createCourseCard(course);
//     });
// }
function createCourseCard(course) {
    return `
        <div class="course-card">
            <img src="${course.image}" alt="${course.title}" class="course-card__image">
            <div class="course-card__content">
                <div>
                    <h3 class="course-card__title">${course.title}</h3>
                    <p class="course-card__instructor">by ${course.instructor}</p>
                    <div class="course-card__rating">★★★★★ ${course.rating}</div>
                </div>
                <div>
                    <div class="course-card__meta">
                        <span><i class="fas fa-book"></i> ${course.lessons} lessons</span>
                        <span><i class="far fa-clock"></i> ${course.duration}</span>
                    </div>
                    <div class="course-card__price">₹ ${course.price}</div>
                </div>
            </div>
        </div>
    `;
}

function renderCourses(category = 'all') {
    const courseGrid = document.getElementById('courseGrid');
    courseGrid.innerHTML = '';
    
    const filteredCourses = category === 'all' ? courses : courses.filter(course => course.category === category);
    
    if (filteredCourses.length === 0) {
        courseGrid.innerHTML = '<div class="course-explorer__empty-message">Coming soon...</div>';
    } else {
        filteredCourses.forEach(course => {
            courseGrid.innerHTML += createCourseCard(course);
        });
    }
}

function initializeCourseExplorer() {
    renderCourses();

    const categoryButtons = document.querySelectorAll('.course-explorer__category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCourses(button.dataset.category);
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeCourseExplorer);

