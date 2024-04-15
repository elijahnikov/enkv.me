import React, {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface ProjectViewContextType {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

const ProjectViewContext = createContext<ProjectViewContextType | undefined>(
  undefined,
);

export const useProjectView = () => {
  const context = useContext(ProjectViewContext);
  if (!context) {
    throw new Error(
      "useProjectViewContext must be used within a ProjectViewProvider",
    );
  }
  return context;
};

interface ProjectViewProviderProps {
  children: ReactNode;
}

export const ProjectViewProvider: FC<ProjectViewProviderProps> = ({
  children,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <ProjectViewContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </ProjectViewContext.Provider>
  );
};
