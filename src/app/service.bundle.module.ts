import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RoleService } from "./services/role.service";
import { UserService } from "./services/user.service";
import { UserChangeService } from './services/user-change.service';

@NgModule({
  declarations: [],
  bootstrap: [],
  imports: [HttpClientModule],
  providers: [
    RoleService,
    UserService,
    UserChangeService
  ],
})
export class ServicesBundleModule {
}
