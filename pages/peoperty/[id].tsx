import PropertyDetail from "@/components/property/PropertyDetail";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => ClipboardItem.name === id);

    if (!property) return <p>Poperty not found</p>;

    return (
        <div>
            <PropertyDetail property={property} />
        </div>
    )
}