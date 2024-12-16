import { useState, useEffect } from "react";
import { getProjects } from "../../api/utils";
import TableView from "../../components/TableView/TableView";
import Loader from "../../components/Loader/Loader";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getAndSetProjects = async () => {
		const projs = await getProjects();
		setIsLoading(false);
		setProjects(projs);
	}

	const onCheckAgain = () => {
		setIsLoading(true);
		getAndSetProjects();
	}

	useEffect(() => {
		getAndSetProjects();
	}, []);

  return (isLoading ? <Loader /> : <TableView items={projects} onCheckAgain={onCheckAgain} />);
}

export default Projects;