import { TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabsOption = () => {
    return (
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All Subjects</TabsTrigger>
            <TabsTrigger value="saved">Saved Subjects</TabsTrigger>
        </TabsList>
    )
}

export default TabsOption