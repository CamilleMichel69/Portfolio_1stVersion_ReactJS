import projects from '../datas/projects.json';
import Card from './card';
import '../style/components/projects.scss';

const Projects = () => {
    return (
        <section id="projects" className="projects">
        <h2>PROJETS</h2>
            <div className="gallery">
            {projects.map((project) => (
            <article key={project.id}>
                <Card image={project.cover} title={project.title} />
            </article>
            ))}
        </div>
      </section>
    )
};

export default Projects;