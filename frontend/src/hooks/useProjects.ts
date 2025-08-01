import { useEffect, useState } from "react";
import { getAllProjects } from "../components/menu/projectMenu/ProjectService";
import { Project } from "../types/project/Project";
import { getToken } from "../utils/token";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const token = getToken();

  useEffect(() => {
    if (!token) return;
    getAllProjects(token)
      .then(setProjects)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
};
