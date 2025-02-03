import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';


export default function PhotographerForm() {
  const [photoType, setPhotoType] = useState('');
  const [liveEventExperience, setLiveEventExperience] = useState('no');
  const [eventDescription, setEventDescription] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [sampleImages, setSampleImages] = useState<FileList | null>(null);
  const [cameraType, setCameraType] = useState('');
  const [errors, setErrors] = useState({
    photoType: '',
    eventDescription: '',
    portfolioLink: '',
    sampleImages: '',
    cameraType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formErrors = { ...errors };
    let isValid = true;

    if (!photoType.trim()) {
      formErrors.photoType = 'Please specify the type of photography you are skilled in.';
      isValid = false;
    } else {
      formErrors.photoType = '';
    }

    if (liveEventExperience === 'yes' && !eventDescription.trim()) {
      formErrors.eventDescription = 'Please describe an event you’ve covered.';
      isValid = false;
    } else {
      formErrors.eventDescription = '';
    }

    if (!portfolioLink.trim() || !/^https?:\/\/.+\..+/.test(portfolioLink)) {
      formErrors.portfolioLink = 'Please provide a valid portfolio link.';
      isValid = false;
    } else {
      formErrors.portfolioLink = '';
    }

    if (!sampleImages || sampleImages.length < 2) {
      formErrors.sampleImages = 'Please upload at least 2 sample images.';
      isValid = false;
    } else {
      formErrors.sampleImages = '';
    }

    if (!cameraType.trim()) {
      formErrors.cameraType = 'Please specify your camera model or smartphone.';
      isValid = false;
    } else {
      formErrors.cameraType = '';
    }

    setErrors(formErrors);

    if (isValid) {
      // Submit form data
      console.log({ photoType, liveEventExperience, eventDescription, portfolioLink, sampleImages, cameraType });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="photoType">What type of photography are you skilled in?</Label>
        <Textarea
          id="photoType"
          placeholder="Event Photography, Portraits, Product Photography, etc."
          value={photoType}
          onChange={(e) => setPhotoType(e.target.value)}
        />
        {errors.photoType && <p className="text-red-500 text-sm">{errors.photoType}</p>}
      </div>

      <div>
        <Label>Do you have experience covering live events?</Label>
        <RadioGroup
          value={liveEventExperience}
          onValueChange={setLiveEventExperience}
          className="flex space-x-4 mt-2"
        >
          <RadioGroupItem value="yes" id="yes">
            <Label htmlFor="yes">Yes</Label>
          </RadioGroupItem>
          <RadioGroupItem value="no" id="no">
            <Label htmlFor="no">No</Label>
          </RadioGroupItem>
        </RadioGroup>
        {liveEventExperience === 'yes' && (
          <Textarea
            id="eventExperience"
            placeholder="Describe an event you’ve covered"
            className="mt-4"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        )}
        {errors.eventDescription && <p className="text-red-500 text-sm">{errors.eventDescription}</p>}
      </div>

      <div>
        <Label htmlFor="portfolio">Provide a link to your photography portfolio</Label>
        <Input
          id="portfolio"
          type="url"
          placeholder="https://yourportfolio.com"
          value={portfolioLink}
          onChange={(e) => setPortfolioLink(e.target.value)}
        />
        {errors.portfolioLink && <p className="text-red-500 text-sm">{errors.portfolioLink}</p>}
      </div>

      <div>
        <Label htmlFor="sampleImages">Upload link to sample images</Label>
        <Input
          id="sampleImages"
          type="text"
          multiple
          accept="url/*"
          onChange={(e) => setSampleImages(e.target.files)}
        />
      </div>

      <div>
        <Label htmlFor="cameraType">Do you own a DSLR/Mirrorless camera or use a smartphone for photography?</Label>
        <Textarea
          id="cameraType"
          placeholder="Specify camera model if applicable"
          value={cameraType}
          onChange={(e) => setCameraType(e.target.value)}
        />
        {errors.cameraType && <p className="text-red-500 text-sm">{errors.cameraType}</p>}
      </div>

      
    </form>
  );
}
