import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Anhar Risnumawan's personal website. New York based Stanford ICME graduate, "
    + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to Anhar Risnumawan&apos;s World of Technological Innovation and Excellence</Link></h2>
          <p>
            Pioneering Advanced Research and Teaching in Computer Vision,
            Machine Learning, Robotics, and Agricultural Technology
          </p>
        </div>
      </header>

      <h3>Introduction</h3>
      <p>Anhar Risnumawan, a Lecturer at Politeknik Elektronika
        Negeri Surabaya (PENS), endeavors to contribute to the
        fields of Computer Vision, Machine Learning, Optimization,
        Robotics, and Agricultural Research. Through his ongoing
        research and a commitment to innovative teaching, he hopes to
        support the advancement of technology and academic learning.
      </p>

      <h3>About Anhar</h3>
      <p>Anhar Risnumawan is an academic and researcher with a focus on
        programming languages such as Python, Matlab, and C++.
        His contributions to robotics and embedded systems have gained
        recognition in his field. He advocates for a teaching
        philosophy rooted in GO-JOSS - Gotong Royong, Jujur, Original,
        Semangat, and Santun (Mutual Cooperation, Honesty, Originality,
        Enthusiasm, and Courtesy), aiming to guide students to value
        these principles in their pursuit of knowledge and technological innovation.
      </p>

      <h3>Professional Milestones</h3>
      <ul>
        <li>Respected Lecturer at Politeknik Elektronika Negeri Surabaya since 2016.</li>
        <li>Renowned for contributions in robotics, UAV technology,
          3D Photography, and agricultural technology.
        </li>
        <li>Award-winning presence in robotics competitions,
          showcasing commitment to excellence.
        </li>
        <li>Leader in research projects that are at the forefront of technological innovation.</li>
      </ul>

      <h3>Services and Expertise</h3>
      <p>Anhar offers:</p>
      <ul>
        <li>Expert-led training and workshops in
          Computer Vision and Machine Learning.
        </li>
        <li>Specialized consultancy in Robotics, Embedded Systems,
          and Agricultural Technology.
        </li>
        <li>Opportunities for collaborative research and development projects.</li>
        <li>Guest lectures and keynote speeches at academic and industry events,
          disseminating knowledge and expertise.
        </li>
      </ul>

      <h3>Call to Action</h3>
      <p>Connect with Anhar Risnumawan for an enriching journey
        into the world of technology and innovation. Ideal for academics,
        students, and industry professionals eager to delve into the
        future of technology under expert guidance.
      </p>

      <h3>Final Thoughts</h3>
      <p>Join Anhar on his quest to redefine the boundaries of technology
        and education. Be part of a transformative experience that marries
        innovative research with practical application,
        underpinned by a commitment to excellence and integrity.
      </p>

    </article>
  </Main>
);

export default Index;
