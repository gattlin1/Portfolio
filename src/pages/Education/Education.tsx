import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Research from '../../components/Education/Research/Research';
import MSUNameLogo from '../../components/Logo/Logos/MSUNameLogo';
import AccordianItem from '../../components/UI/Accordian/AccordianItem/AccordianItem';
import Card from '../../components/UI/Card/Card';
import './Education.scss';

function Education() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Education';
  }, []);

  const courseList = [
    {
      title: ' Introduction to Software Engineering',
      courseCode: 'CSC 450',
      description: (
        <p>
          Study of software engineering concepts that involve gathering
          information, software design, testing and project management. All of
          these concepts where then applied to my{' '}
          <Link to='/experience#MBv2'>Capstone Project MBv2</Link>
        </p>
      ),
    },
    {
      title: 'Data Mining',
      courseCode: 'CSC 535',
      description: (
        <p>
          Introduction to the basic concepts of data mining including data
          preprocessing, classification, clustering and association rules
          mining.
        </p>
      ),
    },
    {
      title: 'Special Readings',
      courseCode: 'CSC 596',
      description: (
        <p>
          Directed study with a faculty member. My course was applied for my{' '}
          <Link to='/education#CNN Approach for IR Spectral Classification'>
            MOSGC research
          </Link>{' '}
          which involved annotating FTIR spectra with CNNs and statistical
          similarity algorithms.
        </p>
      ),
    },
    {
      title: 'Internet Programming',
      courseCode: 'CSC 365',
      description: (
        <p>
          An introduction to paradigms and languages used in internet and World
          Wide Web programming. These include modern tools for client-side and
          server-side programming and dynamic Web page generation.
        </p>
      ),
    },
    {
      title: 'Parallel Distributed Computing',
      courseCode: 'CSC 338',
      description: (
        <p>
          Writing parallel or distributed programs and applications in several
          contexts such as multithreaded programming, general purpose computing
          on a graphics processing unit, and MPI programming.
        </p>
      ),
    },
    {
      title: 'Database System Concepts',
      courseCode: 'CSC 335',
      description: (
        <p>
          A study of modern database systems and their underlying concepts. Core
          topics include the relational model, SQL, database design theory,
          query processing, file structures, transactions, and concurrency.
        </p>
      ),
    },
    {
      title: 'Algorithms/Adv Data Structures',
      courseCode: 'CSC 325',
      description: (
        <p>
          A study of algorithms and advanced data structures including graphs,
          heaps, hashing, self-adjusting data structures, set representations,
          greedy algorithms, dynamic programming and introduction to NP-complete
          problems.
        </p>
      ),
    },
    {
      title: 'Data Structures',
      courseCode: 'CSC 232',
      description: (
        <p>
          Topics will include: algorithm design; complexity analysis; abstract
          data types and encapsulation; basic data structures and their
          application, including stacks, queues, linked lists and binary trees;
          dynamic memory allocation; recursion; sorting and searching; debugging
          techniques.
        </p>
      ),
    },
    {
      title: 'Computer Systems Fundamentals',
      courseCode: 'CSC 344',
      description: (
        <p>
          An integrated introduction to computer systems fundamentals. Topics
          include computer architecture and major components, operating system
          concepts and implementation techniques (processes, threads, memory
          management, and distributed systems), and network theory, concepts and
          techniques.
        </p>
      ),
    },
    {
      title: 'Intro to Secure Computing',
      courseCode: 'CSC388',
      description: (
        <p>
          Introduction to the general principles of secure computing and
          computer security. Learned about common threat types and cyber attacks
          including malware, denial-of-service, spoofing, and phishing as well
          as fundamental building blocks of secure computing systems such as
          authentication, encryption, and digital signatures.
        </p>
      ),
    },
    {
      title: 'Languages and Machines',
      courseCode: 'CSC 333',
      description: (
        <p>
          A study of two classes of languages: formal languages (regular,
          context-free, and computable) and their associated machines (finite
          automata, pushdown automata, and Turing machines).
        </p>
      ),
    },
  ];

  return (
    <div className='education'>
      <Card title=''>
        <div className='school-logo-container'>
          <MSUNameLogo />
        </div>
        <p>
          <strong>Aug 2016 - May 2020</strong>
        </p>
        <div className='text-color-gray'>
          <p>
            Bachelor of Science in Computer Science and Minor in Mathematics and
            Japanese
          </p>
          <div className='description text-color-gray'>
            <p>
              I attended Missouri State University for a BS in Computer Science
              upon graduating high school. Some of my favorite classes were my
              capstone project, research grant contributions, data mining, and
              parallel programming. The capstone and research project were
              amazing experiences. They allowed me to get experience working in
              a team and also put me in a leadership position to manage
              projects. Data mining and parallel programming were areas that I
              was very interested in because the topics covered were very
              involved and technical. Upon graduating I received a 3.93 GPA and
              was on the Dean's List all 4 years.
            </p>
            <div className='classes'>
              {courseList.map(({ title, courseCode, description }) => (
                <AccordianItem
                  title={title}
                  id={courseCode}
                  date=''
                  content={description}
                  initialState={false}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
      <br />
      <Research />
    </div>
  );
}

export default Education;
