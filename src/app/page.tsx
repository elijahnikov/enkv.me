import WorkExperience from "@/components/common/home-page/experience/work-experience";
import ProfileHeader from "@/components/common/home-page/profile-header";
import SecondaryProfileHeader from "@/components/common/home-page/secondary-profile-header";
import Island from "@/components/common/island/island";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full flex-col justify-center space-y-6">
      <div className="flex justify-center">
        <Card className="w-[60%] p-4">
          <div>
            <ProfileHeader />
          </div>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="w-[60%] p-4">
          <div>
            <SecondaryProfileHeader />
          </div>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="flex w-[60%] justify-center px-6 py-2">
          <WorkExperience />
        </Card>
      </div>
      <Island />
      <div className="h-20" />
    </main>
  );
}
