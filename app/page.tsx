import { SplineScene } from "@/components/spline-scene"
import { ProjectForm } from "@/components/project-form"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">Spline 3D Scene Showcase</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Integrate interactive 3D scenes into your Next.js application
          </p>
        </div>
      </header>

      <section className="container mx-auto py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Configuration</h2>
            <ProjectForm />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Example Spline Scene</h2>
            <div className="bg-secondary rounded-lg overflow-hidden h-[400px]">
              <SplineScene
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                className="w-full h-full"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              This is an example 3D scene created with Spline. Try interacting with it!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold mb-4">How to Use the SplineScene Component</h2>
          <div className="bg-card p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto p-4 bg-secondary rounded">
              {`import { SplineScene } from '@/components/spline-scene'

export default function MyPage() {
  return (
    <div className="h-[500px]">
      <SplineScene 
        scene="YOUR_SPLINE_SCENE_URL" 
        className="w-full h-full"
      />
    </div>
  )
}`}
            </pre>
          </div>
          <div className="mt-6 space-y-4">
            <h3 className="font-medium">Steps to integrate:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Create a scene in{" "}
                <a
                  href="https://spline.design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Spline
                </a>
              </li>
              <li>Export and publish your scene to get a URL</li>
              <li>Import the SplineScene component in your page</li>
              <li>Add the component with your scene URL</li>
              <li>Style the container to control the dimensions</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  )
}

