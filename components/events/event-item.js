// import Link from "next/link";
import calsses from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRigtIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={calsses.item}>
      <img src={"/" + image} alt={title} />
      <div className={calsses.content}>
        <div className={calsses.summary}>
          <h2>{title}</h2>
          <div className={calsses.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={calsses.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={calsses.actions}>
          <Button link={exploreLink}>
            <span>Explor Event</span>
            <span className={calsses.icon}>
              <ArrowRigtIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
