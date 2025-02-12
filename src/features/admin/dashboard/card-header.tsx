interface CardHeaderProp {
    title: string;
    description: string;
}
function CardHeader({ title, description }: CardHeaderProp) {
    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}

export default CardHeader;
