import { Award } from "lucide-react";

const AchievementSection = () => {
  return (
    <section id="certificates" className="py-16 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="header2">My Achievements</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-neutral-100/60 dark:bg-neutral-900/60 p-4 rounded-xl shadow-md">
            <Award className="size-6 text-yellow-400 drop-shadow-yellowGlow flex-shrink-0" />
            <p>
              Awarded{" "}
              <span className="font-semibold">Employee of the Month</span> at
              <span className="italic text-yellow-400 dark:text-yellow-300">
                {" "}
                SquareBoat
              </span>{" "}
              (May 2025).
            </p>
          </div>

          <div className="flex items-center gap-3 bg-neutral-100/60 dark:bg-neutral-900/60 p-4 rounded-xl shadow-md">
            <Award className="size-6 text-yellow-400 drop-shadow-yellowGlow flex-shrink-0" />
            <p>
              Received the{" "}
              <span className="font-semibold">Carnival Ninja Award</span> at
              <span className="italic text-yellow-400 dark:text-yellow-300">
                {" "}
                Capgemini
              </span>{" "}
              (April 2022).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
