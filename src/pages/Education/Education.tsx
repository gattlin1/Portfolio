import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MSUNameLogo from '../../components/Logo/MSUNameLogo/MSUNameLogo';
import Skill from '../../components/Skill/Skill';
import Card from '../../components/UI/Card/Card';
import Carousel from '../../components/UI/Carousel/Carousel';
import CarouselItem from '../../components/UI/Carousel/CarouselItem/CarouselItem';

import './Education.scss';

function Education() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Education';
  }, []);

  const courseList = [
    {
      title: ' Introduction to Software Engineering',
      courseCode: 'CSC 450',
      grade: 'A',
      description: (
        <p>
          Study of software engineering concepts that involve gatherint
          information, software design, testing and project management. All of
          these concepts are applied to the{' '}
          <Link to='/experience#MBv2'>Capstone Project</Link>
        </p>
      ),
      skills: ['Problem Solving', 'Agile', 'Kanban Boards', 'Version Control'],
    },
    {
      title: 'Data Mining',
      courseCode: 'CSC 535',
      grade: 'A',
      description: (
        <p>
          Introduction to the basic concepts of data mining including data
          preprocessing, classification, clustering and association rules
          mining.
        </p>
      ),
      skills: [
        'Data Preprocessing',
        'Clustering',
        'Python',
        'NumPy',
        'Scikit-Learn',
        'Neural Networks',
      ],
    },
    {
      title: 'Special Readings',
      courseCode: 'CSC 596',
      grade: 'A',
      description: (
        <p>
          Directed study with a faculty member. My course was applied for my{' '}
          <Link to='/research#CNN Approach for IR Spectral Classification'>
            MOSGC research
          </Link>{' '}
          which involved annotating FTIR spectra with CNNs and statistical
          similarity algorithms.
        </p>
      ),
      skills: [
        'Python',
        'Tensorflow',
        'Keras',
        'TensorBoard',
        'NumPy',
        'Parallel Programming',
        'Git',
        'Bash',
      ],
    },
    {
      title: 'Internet Programming',
      courseCode: 'CSC 365',
      grade: 'A',
      description: (
        <p>
          An introduction to paradigms and languages used in internet and World
          Wide Web programming. These include modern tools for client-side and
          server-side programming and dynamic Web page generation.
        </p>
      ),
      skills: ['JavaScript', 'HTML', 'CSS', 'Express', 'Pug'],
    },
    {
      title: 'Parallel Distributed Computing',
      courseCode: 'CSC 338',
      grade: 'A',
      description: (
        <p>
          Writing parallel or distributed programs and applications in several
          contexts such as multithreaded programming, general purpose computing
          on a graphics processing unit, and MPI programming.
        </p>
      ),
      skills: ['C', 'Multithreading', 'Multiprocessing', 'MPI'],
    },
    {
      title: 'Database System Concepts',
      courseCode: 'CSC 335',
      grade: 'A',
      description: (
        <p>
          A study of modern database systems and their underlying concepts. Core
          topics include the relational model, SQL, database design theory,
          query processing, file structures, transactions, and concurrency.
        </p>
      ),
      skills: ['Oracle', 'SQL'],
    },
    {
      title: 'Algorithms/Adv Data Structures',
      courseCode: 'CSC 325',
      grade: 'A',
      description: (
        <p>
          A study of algorithms and advanced data structures including graphs,
          heaps, hashing, self-adjusting data structures, set representations,
          greedy algorithms, dynamic programming and introduction to NP-complete
          problems.
        </p>
      ),
      skills: ['Python', 'Big O Notation'],
    },
    {
      title: 'Data Structures',
      courseCode: 'CSC 232',
      grade: 'A',
      description: (
        <p>
          Topics will include: algorithm design; complexity analysis; abstract
          data types and encapsulation; basic data structures and their
          application, including stacks, queues, linked lists and binary trees;
          dynamic memory allocation; recursion; sorting and searching; debugging
          techniques.
        </p>
      ),
      skills: ['C++'],
    },
    {
      title: 'Computer Systems Fundamentals',
      courseCode: 'CSC 344',
      grade: 'A',
      description: (
        <p>
          An integrated introduction to computer systems fundamentals. Topics
          include computer architecture and major components, operating system
          concepts and implementation techniques (processes, threads, memory
          management, and distributed systems), and network theory, concepts and
          techniques.
        </p>
      ),
      skills: ['Assembly Code'],
    },
    {
      title: 'Intro to Secure Computing',
      courseCode: 'CSC388',
      grade: 'A',
      description: (
        <p>
          This course provides an introduction to the general principles of
          secure computing and computer security. Students will learn about
          common threat types and cyber attacks including malware,
          denial-of-service, spoofing, and phishing as well as fundamental
          building blocks of secure computing systems such as authentication,
          encryption, and digital signatures.
        </p>
      ),
      skills: [],
    },
    {
      title: 'Languages and Machines',
      courseCode: 'CSC 333',
      grade: 'A',
      description: (
        <p>
          A study of two classes of languages: formal languages (regular,
          context-free, and computable) and their associated machines (finite
          automata, pushdown automata, and Turing machines).
        </p>
      ),
      skills: ['Rust'],
    },
  ];

  return (
    <div className='education'>
      <div className='school-logo-container'>
        <MSUNameLogo />
      </div>
      <div className='classes'>
        <Carousel
          breakPoints={[
            { breakPointWidth: 650, breakPointItems: 1 },
            { breakPointWidth: 1000, breakPointItems: 2 },
          ]}
        >
          {courseList.map(
            ({ title, courseCode, grade, description, skills }) => (
              <CarouselItem>
                <Card title={`${courseCode}: ${title}`} key={courseCode}>
                  <div className='description '>{description}</div>
                  <div>Grade Received: {grade}</div>
                  <ul className='skill-list'>
                    {skills.map((skill, idx) => (
                      <Skill key={idx}>{skill}</Skill>
                    ))}
                  </ul>
                </Card>
              </CarouselItem>
            )
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default Education;
