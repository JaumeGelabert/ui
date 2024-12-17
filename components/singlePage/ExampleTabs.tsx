import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExampleTabsProps {
  tabs: {
    example: React.ReactNode;
    code: string;
  };
}

export default function ExampleTabs({ tabs }: ExampleTabsProps) {
  return (
    <>
      <Tabs defaultValue="example" className="w-full">
        <TabsList>
          <TabsTrigger value="example">Example</TabsTrigger>
          <TabsTrigger value="code" disabled>
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="example">
          <div className="flex h-72 w-full flex-col items-center justify-center rounded-lg border">
            {tabs.example}
          </div>
        </TabsContent>
        <TabsContent value="code">{tabs.code}</TabsContent>
      </Tabs>
    </>
  );
}
