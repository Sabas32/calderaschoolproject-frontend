import NavBar from "../Components/navBar";
import "../css/aboutus.css";
import aboutImg1 from "../assets/undraw_personal_info_re_ur1n aboutpage.svg";
import aboutImg2 from "../assets/undraw_online_reading_np7n aboutpage.svg";
import Ellogo from "../assets/e-learning-icon png.png";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div id="about-main">
        <div className="jumbotron fadeInDown">
          <div className="jumbotron-inner">
            <div className="top-box">
              <div className="content-box">
                <h1 className="fadeIn first">About E-School</h1>
                <p className="fadeIn second">
                  Empowering global education, our E-School platform pioneers
                  accessible, tech-driven learning experiences, transcending
                  boundaries to cultivate a community of lifelong learners. Join
                  us in reshaping the future of education, where knowledge knows
                  no limits.
                </p>
              </div>
            </div>
          </div>
          <div className="img-layer-container">
            <div className="team-image fadeIn third" id="team-image">
              <img src={aboutImg1} />
            </div>
            {/* <div className="circles-container">
              <div className="img-1">
                <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />
              </div>
              <div className="img-2">
                <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="story-container fadeIn fourth">
          <div className="need-for-dx-container">
            <h3 className="text-center">Need for E-School </h3>
            <p>
              In an era defined by rapid technological advancements and a global
              shift towards digitalization, the need for innovative educational
              solutions has never been more critical. E-School emerges as a
              response to the evolving landscape of education, breaking down
              geographical barriers and providing accessible learning
              opportunities for students worldwide. Our commitment to addressing
              this need drives the development of our E-School platform.
            </p>
            <div className="img-container">
              <img
                src={Ellogo}
                alt="apimatic developer experience process"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="container-divider" />
          <div className="our-tech-container">
            <h3 className="text-center">Our Technology</h3>
            <p>
              At the core of our E-School platform is cutting-edge technology
              designed to revolutionize the educational experience. We leverage
              state-of-the-art infrastructure to ensure seamless content
              delivery, robust security measures to protect user data, and an
              intuitive interface for both teachers and students. Our adaptive
              technology fosters an engaging and effective learning environment,
              empowering users to thrive in an increasingly digital world.
            </p>
            <div className="img-container">
              <img
                src={aboutImg2}
                alt="apimatic code generation engine"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="container-divider" />
          <div className="origin-story-container">
            <h3 className="text-center">Origin Story</h3>
            <p>
              Our journey commenced with a shared passion among a diverse group
              of educators, technologists, and enthusiasts who recognized the
              transformative potential of E-School. The idea took root in
              countless discussions, where we delved into the challenges faced
              by traditional education systems—geographical limitations,
              resource disparities, and a growing need for flexible learning
              options. Motivated by a collective commitment to bridge these
              gaps, our team set out to create an E-School platform that would
              redefine the landscape of education.
            </p>
            <p>
              As we embarked on this mission, the collaborative spirit among
              team members became the driving force behind our platform's
              development. Drawing inspiration from the experiences of educators
              who strived to make a difference in students' lives, we envisioned
              a solution that would not only democratize education but also
              provide a platform for passionate teachers to share their
              expertise on a global scale. The fusion of pedagogical insights
              and technological innovation became the cornerstone of our
              project, shaping the platform's features to meet the diverse needs
              of both educators and learners.
            </p>
            <p>
              From conceptualization to realization, our journey involved
              overcoming challenges, refining ideas, and staying true to our
              core values. The belief that education should be a universal right
              fueled our dedication, and each step forward was marked by a
              shared commitment to creating a positive impact on the educational
              landscape. Today, our origin story stands as a testament to the
              collaborative efforts of a team that dared to envision a future
              where education knows no bounds.
            </p>
          </div>
          <div className="container-divider" />
          <div className="today-container">
            <h3 className="text-center">Flash Forward Today</h3>
            <p>
              In the developmental phase, our E-School platform holds the
              promise of transforming education, even in its pre-functional
              state. Envisioning the impact we aim to make, we are diligently
              crafting a platform that aspires to:
            </p>
            <ul>
              <li>
                Global Vision: We are laying the foundation for a platform that
                aspires to connect students and educators globally, fostering a
                sense of community and shared knowledge.
              </li>
              <li>
                User-Centric Design: Prioritizing user feedback, we are in the
                process of refining the platform's design and functionality to
                ensure an intuitive and enjoyable learning experience.
              </li>
              <li>
                Interactive Spaces: Our forthcoming features include discussion
                forums and chat functionalities, designed to create interactive
                learning spaces and encourage collaboration among users.
              </li>
              <li>
                Innovative Learning Tools: As we continue development, we are
                actively exploring and integrating adaptive learning
                technologies to provide personalized educational journeys for
                each user.
              </li>
              <li>
                Growth Roadmap: The journey ahead involves regular updates,
                feature additions, and a commitment to adapt to the evolving
                needs of our users. Expect a dynamic and evolving platform as we
                progress.
              </li>
            </ul>
          </div>
          <div className="container-divider" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
