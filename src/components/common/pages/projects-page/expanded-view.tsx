import { useProjectView } from "@/context/projectView";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function ExpandedView() {
  const { selectedId, setSelectedId } = useProjectView();
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
              <h1>hello</h1>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
