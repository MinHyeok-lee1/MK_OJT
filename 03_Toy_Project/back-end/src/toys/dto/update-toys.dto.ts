import { PartialType } from "@nestjs/mapped-types";
import { CreateToyDTO } from "./create-toys.dto";

export class UpdateToyDTO extends PartialType(CreateToyDTO) {

}