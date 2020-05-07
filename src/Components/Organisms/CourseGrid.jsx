import React from 'react';
import CourseCard from '../Molecules/CourseCard';

const courses = [
  {
    id: 1,
    titulo: 'React desde cero',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png',
    price: 40,
    profesor: 'Dani Boni',
  },
  {
    id: 2,
    titulo: 'React desde cero',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/original/61514891-66e9-4cc2-b5e5-e7f6c9a62e64.png',
    price: 80,
    profesor: 'Lio Sol',
  },
  {
    id: 3,
    titulo: 'Go desde cero',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png',
    price: 60,
    profesor: 'Kei Luna',
  },
  {
    id: 4,
    titulo: 'Dart desde cero',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/original/3006847a-5e49-46e2-8933-fc3fdd112358.png',
    price: 50,
    profesor: 'Leo Solano',
  },
  {
    id: 5,
    titulo: 'Sass desde cero',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/original/fe88d109-7807-453e-b357-4858af36bf28.jpg',
    price: 400,
    profesor: 'Jankall Boni',
  },
  {
    id: 6,
    titulo: 'Fundamentos del Diseño',
    image:
      'https://edteam-media.s3.amazonaws.com/courses/original/3c29d7c5-476f-4ce1-abcd-e249f00f5ac0.png',
    price: 120,
    profesor: 'Ada Boni',
  },
];

const CourseGrid = () => (
  <div className="ed-grid m-grid-3">
    {courses.map((c) => (
      <CourseCard
        key={c.id}
        id={c.id}
        title={c.titulo}
        image={c.image}
        price={c.price}
        professor={c.professor}
      />
    ))}
  </div>
);

export default CourseGrid;
