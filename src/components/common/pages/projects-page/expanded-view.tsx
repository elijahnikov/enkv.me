import { useProjectView } from "@/context/projectView";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import SingleProjectExpanded from "./single-project-expanded";
import useKeyPress from "@/hooks/useKeyPress";

export default function ExpandedView() {
  const { selectedId, setSelectedId } = useProjectView();
  const project = projects.find((p) => p.id === parseInt(String(selectedId)));

  useKeyPress("Escape", () => {
    setSelectedId(null);
  });
  return (
    <AnimatePresence>
      {selectedId && (
        <>
          <motion.div
            onClick={() => {
              window.scrollTo(0, 0);
              setSelectedId(null);
            }}
            className={cn(
              "absolute -top-6 left-0 h-max w-screen bg-black/60 py-10 transition",
            )}
          >
            <motion.div
              onClick={() => setSelectedId(null)}
              className="relative bottom-0 left-0 right-0 top-0 z-10 m-auto h-max w-[85vw] rounded-lg border border-neutral-200 bg-white"
              layoutId={selectedId}
            >
              {project && <SingleProjectExpanded project={project} />}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
