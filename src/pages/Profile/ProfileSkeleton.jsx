import { Skeleton } from "@mui/material";
import React from "react";

export default function ProfileSkeleton() {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        style={{ width: "25vw", height: "500px" }}
      />
      <div>
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
}
