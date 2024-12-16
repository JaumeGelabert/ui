import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExampleTabs() {
  return (
    <>
      <Tabs defaultValue="example" className="w-full">
        <TabsList>
          <TabsTrigger value="example">Example</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="example">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="code">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}
