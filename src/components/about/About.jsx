import React from "react";
import "./about.css";
import ME from "../../assets/me-about2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="about me" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1+ Year Working Experience</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article>
					</div>

					<p>I am a passionate full-stack web developer with over a year of experience.</p>
					<p>
						Dedicated to keep on learning different technologies and methodologies, with the ambition to write clean and readable code,
						both independently and as part of a team. I strive to promote a pleasant and positive work environment.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
