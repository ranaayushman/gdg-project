import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';


const appDevSchema = z.object({
  platform: z.string().min(1, 'Please specify the platform and tools you use.'),
  crossPlatformExperience: z.string().min(1, 'Please describe your experience with cross-platform tools.'),
  apiIntegration: z.string().min(1, 'Please describe your experience connecting apps to the internet.'),
  appProjects: z.string().min(1, 'Please share links to your apps or describe them.'),
  testingMethods: z.string().min(1, 'Please describe how you test your apps.'),
  appChallenges: z.string().min(1, 'Please describe any challenges you faced while building apps.'),
  learningMethods: z.string().min(1, 'Please share how you learn new skills in app development.'),
  improvementAreas: z.string().min(1, 'Please describe an app development concept you want to improve.'),
  gdgAppIdea: z.string().min(1, 'Please suggest an app idea for GDG HIT.')
});

export default function AppDeveloperForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(appDevSchema) });

  const onSubmit = (data: Record<string, number>) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="platform">Do you develop apps for Android, iOS, or both? Which tools or languages do you use?</Label>
        <Textarea
          id="platform"
          placeholder="e.g., Java, Kotlin, Swift"
          {...register('platform')}
        />
        {errors.platform?.message && typeof errors.platform.message === 'string' && <p className="text-red-500 text-sm">{errors.platform.message}</p>}
      </div>

      <div>
        <Label htmlFor="crossPlatformExperience">Have you tried using Flutter or React Native for cross-platform app development?</Label>
        <Textarea
          id="crossPlatformExperience"
          placeholder="Describe your experience with Flutter or React Native"
          {...register('crossPlatformExperience')}
        />
        {errors.crossPlatformExperience?.message && typeof errors.crossPlatformExperience.message === 'string' && <p className="text-red-500 text-sm">{errors.crossPlatformExperience.message}</p>}
      </div>

      <div>
        <Label htmlFor="apiIntegration">Do you know how to connect your app to the internet using APIs?</Label>
        <Textarea
          id="apiIntegration"
          placeholder="Describe your API integration experience"
          {...register('apiIntegration')}
        />
        {errors.apiIntegration?.message && typeof errors.apiIntegration.message === 'string' && <p className="text-red-500 text-sm">{errors.apiIntegration.message}</p>}
      </div>

      <div>
        <Label htmlFor="appProjects">Have you built any apps before?</Label>
        <Textarea
          id="appProjects"
          placeholder="Share app links or describe your projects"
          {...register('appProjects')}
        />
        {errors.appProjects?.message && typeof errors.appProjects.message === 'string' && <p className="text-red-500 text-sm">{errors.appProjects.message}</p>}
      </div>

      <div>
        <Label htmlFor="testingMethods">How do you test your app to make sure it works correctly?</Label>
        <Textarea
          id="testingMethods"
          placeholder="Describe your testing methods"
          {...register('testingMethods')}
        />
        {errors.testingMethods?.message && typeof errors.testingMethods.message === 'string' && <p className="text-red-500 text-sm">{errors.testingMethods.message}</p>}
      </div>

      <div>
        <Label htmlFor="appChallenges">Have you ever faced any challenges while building an app?</Label>
        <Textarea
          id="appChallenges"
          placeholder="Describe the challenges and how you solved them"
          {...register('appChallenges')}
        />
        {errors.appChallenges?.message && typeof errors.appChallenges.message === 'string' && <p className="text-red-500 text-sm">{errors.appChallenges.message}</p>}
      </div>

      <div>
        <Label htmlFor="learningMethods">How do you learn new skills or keep up with new tools in app development?</Label>
        <Textarea
          id="learningMethods"
          placeholder="Describe your learning methods"
          {...register('learningMethods')}
        />
        {errors.learningMethods?.message && typeof errors.learningMethods.message === 'string' && <p className="text-red-500 text-sm">{errors.learningMethods.message}</p>}
      </div>

      <div>
        <Label htmlFor="improvementAreas">What’s an app development concept you’d like to get better at?</Label>
        <Textarea
          id="improvementAreas"
          placeholder="Share the concept or tool you are focusing on"
          {...register('improvementAreas')}
        />
        {errors.improvementAreas?.message && typeof errors.improvementAreas.message === 'string' && <p className="text-red-500 text-sm">{errors.improvementAreas.message}</p>}
      </div>

      <div>
        <Label htmlFor="gdgAppIdea">What kind of app would you like to create for GDG HIT to help the student community?</Label>
        <Textarea
          id="gdgAppIdea"
          placeholder="Share your creative app idea"
          {...register('gdgAppIdea')}
        />
        {errors.gdgAppIdea?.message && typeof errors.gdgAppIdea.message === 'string' && <p className="text-red-500 text-sm">{errors.gdgAppIdea.message}</p>}
      </div>

      
    </form>
  );
}
