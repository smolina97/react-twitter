import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default function Profile() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <strong className="mb-2">Natalie Paisley</strong>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
    </Card>
  );
}
