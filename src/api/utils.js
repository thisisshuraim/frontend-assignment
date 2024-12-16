import { safelyGetValueFromObject } from "../utils";
import { endpoints, labelFromApiMap } from "./constants";

const getProjects = async () => {
  try {
    const resp = await fetch(endpoints.projects);
    const json = await resp.json();
    return mapToProjects(json);
  }
  catch(err) {
    console.error("Failed to fetch projects", err);
    return [];
  }
}

const mapToProjects = json => {
  const mapToSingleProject = project => ({
    sNo : safelyGetValueFromObject(labelFromApiMap.sNo, "", project),
    percentageFunded : safelyGetValueFromObject(labelFromApiMap.percentageFunded, "", project),
    amountPledged : safelyGetValueFromObject(labelFromApiMap.amountPledged, "", project)
  })

  return json.map(project => mapToSingleProject(project));
}

export { getProjects };