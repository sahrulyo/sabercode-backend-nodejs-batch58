import { Request, Response, NextFunction } from "express";
import { IReqUser } from "@/utils/interfaces";

  
const authorizeRoles = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const userRole = (req as IReqUser).user?.role;
  
      if (!userRole || !roles.includes(userRole)) {
        return res.status(403).json({
          message: "Forbidden",
        });
      }
  
      next();
    };
  };
  
  export default authorizeRoles;