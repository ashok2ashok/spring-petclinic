package org.springframework.samples.petclinic.system;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Profile("!production")
class CrashController {
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.springframework.samples.petclinic.system;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller used to showcase what happens when an exception is thrown
 *
 * @author Michael Isvy
 * <p/>
 * Also see how a view that resolves to "error" has been added ("error.html").
 */
@Controller
class CrashController {

	@GetMapping("/oups")
	public String triggerException() {
		throw new RuntimeException(
				"Expected: controller used to showcase what " + "happens when an exception is thrown");
	}

}
