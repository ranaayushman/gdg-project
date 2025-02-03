import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';

import { Label } from '@/components/ui/label';


const webDevSchema = z.object({
  languagesTools: z.string().min(1, 'Please specify the languages and tools you use.'),
  frontendExperience: z.string().min(1, 'Please describe your experience with front-end frameworks.'),
  backendExperience: z.string().min(1, 'Please describe your experience with back-end technologies.'),
  gitExperience: z.string().min(1, 'Please specify your familiarity with version control systems.'),
  personalProjects: z.string().min(1, 'Please share links to your personal websites or projects.'),
  responsiveDesign: z.string().min(1, 'Please describe how you ensure responsive design.'),
  teamProjectExperience: z.string().min(1, 'Please describe your experience working on team projects.'),
  learningTrends: z.string().min(1, 'Please share how you stay updated with new trends.'),
  currentLearning: z.string().min(1, 'Please describe what you are currently learning.'),
  creativeFeature: z.string().min(1, 'Please suggest a feature for the GDG HIT website.')
});

export default function WebDeveloperForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(webDevSchema) });

  

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-6">
      <div>
        <Label htmlFor="languagesTools">What languages and tools do you use for web development?</Label>
        <Textarea
          id="languagesTools"
          placeholder="e.g., HTML, CSS, JavaScript"
          {...register('languagesTools')}
        />
        {errors.languagesTools && <p className="text-red-500 text-sm">{String(errors.languagesTools.message)}</p>}
      </div>

      <div>
        <Label htmlFor="frontendExperience">Have you worked with any front-end libraries or frameworks?</Label>
        <Textarea
          id="frontendExperience"
          placeholder="e.g., React, Bootstrap"
          {...register('frontendExperience')}
        />
        {errors.frontendExperience && <p className="text-red-500 text-sm">{String(errors.frontendExperience.message)}</p>}
      </div>

      <div>
        <Label htmlFor="backendExperience">Do you have any experience with back-end technologies?</Label>
        <Textarea
          id="backendExperience"
          placeholder="e.g., Node.js, Express.js"
          {...register('backendExperience')}
        />
        {errors.backendExperience && <p className="text-red-500 text-sm">{String(errors.backendExperience.message)}</p>}
      </div>

      <div>
        <Label htmlFor="gitExperience">Are you familiar with using Git or any version control systems?</Label>
        <Textarea
          id="gitExperience"
          placeholder="Describe your experience with Git or other version control systems"
          {...register('gitExperience')}
        />
        {errors.gitExperience && <p className="text-red-500 text-sm">{String(errors.gitExperience.message)}</p>}
      </div>

      <div>
        <Label htmlFor="personalProjects">Have you created any personal websites or projects?</Label>
        <Textarea
          id="personalProjects"
          placeholder="Please share links if available"
          {...register('personalProjects')}
        />
        {errors.personalProjects && <p className="text-red-500 text-sm">{String(errors.personalProjects.message)}</p>}
      </div>

      <div>
        <Label htmlFor="responsiveDesign">How do you ensure your website works well on all devices?</Label>
        <Textarea
          id="responsiveDesign"
          placeholder="Describe your approach to responsive design"
          {...register('responsiveDesign')}
        />
        {errors.responsiveDesign && <p className="text-red-500 text-sm">{String(errors.responsiveDesign.message)}</p>}
      </div>

      <div>
        <Label htmlFor="teamProjectExperience">Have you worked on a team project?</Label>
        <Textarea
          id="teamProjectExperience"
          placeholder="Describe how you managed code with others"
          {...register('teamProjectExperience')}
        />
        {errors.teamProjectExperience && <p className="text-red-500 text-sm">{String(errors.teamProjectExperience.message)}</p>}
      </div>

      <div>
        <Label htmlFor="learningTrends">How do you stay updated with new trends in web development?</Label>
        <Textarea
          id="learningTrends"
          placeholder="Describe your learning methods"
          {...register('learningTrends')}
        />
        {errors.learningTrends && <p className="text-red-500 text-sm">{String(errors.learningTrends.message)}</p>}
      </div>

      <div>
        <Label htmlFor="currentLearning">What’s a concept or tool you’re currently learning?</Label>
        <Textarea
          id="currentLearning"
          placeholder="Share what you are currently learning about"
          {...register('currentLearning')}
        />
        {errors.currentLearning && <p className="text-red-500 text-sm">{String(errors.currentLearning.message)}</p>}
      </div>

      <div>
        <Label htmlFor="creativeFeature">If you had the chance, what feature would you add to the GDG HIT website?</Label>
        <Textarea
          id="creativeFeature"
          placeholder="Share your creative ideas"
          {...register('creativeFeature')}
        />
        {errors.creativeFeature && <p className="text-red-500 text-sm">{String(errors.creativeFeature.message)}</p>}
      </div>

     
    </form>
  );
}
